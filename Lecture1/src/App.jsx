import React, { useState } from 'react';

export default function App() {
  const [accounts, setAccounts] = useState([]);
  const [status, setStatus] = useState('Idle');
  const [logs, setLogs] = useState([]);

  // Handle CSV Upload and Parse Credentials
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const lines = text.split('\n').filter((l) => l.trim().length > 0);
      
      // Parse header and rows
      const parsed = lines.slice(1).map((line) => {
        const [email, password] = line.split(',');
        return { email: email?.trim(), password: password?.trim() };
      });

      const validAccounts = parsed.filter((a) => a.email && a.password);
      setAccounts(validAccounts);
      setLogs((prev) => [...prev, `[UI] Loaded ${validAccounts.length} valid accounts from CSV.`]);
    };
    reader.readAsText(file);
  };

  // Trigger Execution via Express API
  const startAutomation = async () => {
    if (accounts.length === 0) return alert('Please upload a valid CSV first.');
    
    setStatus('Running');
    setLogs((prev) => [...prev, `[UI] Sending batch request to backend...`]);

    try {
      const response = await fetch('http://localhost:5000/api/start-automation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accounts }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('Completed');
        setLogs((prev) => [...prev, `[UI] Execution complete. Results processed.`]);
      } else {
        throw new Error(data.error || 'Server error occurred');
      }
    } catch (err) {
      setStatus('Error');
      setLogs((prev) => [...prev, `[ERROR] ${err.message}`]);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Account Automation Console</h2>

      <div style={{ marginBottom: '1.5rem', border: '1px dashed #ccc', padding: '1rem', borderRadius: '4px' }}>
        <label>
          <strong>Import Accounts (CSV): </strong>
          <input type="file" accept=".csv" onChange={handleFileUpload} />
        </label>
        <p style={{ margin: '0.5rem 0 0 0', color: '#666' }}>
          Loaded Accounts: {accounts.length}
        </p>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <button
          onClick={startAutomation}
          disabled={status === 'Running' || accounts.length === 0}
          style={{ padding: '0.6rem 1.5rem', cursor: 'pointer', fontSize: '1rem' }}
        >
          {status === 'Running' ? 'Processing Batch...' : 'Start Automation'}
        </button>
        <span style={{ marginLeft: '1rem', fontWeight: 'bold' }}>Status: {status}</span>
      </div>

      <div>
        <h3>Execution Logs</h3>
        <div
          style={{
            backgroundColor: '#1e1e1e',
            color: '#00ff00',
            padding: '1rem',
            borderRadius: '4px',
            height: '250px',
            overflowY: 'auto',
            fontFamily: 'monospace',
          }}
        >
          {logs.length === 0 ? (
            <span style={{ color: '#666' }}>Console output ready...</span>
          ) : (
            logs.map((log, index) => <div key={index}>{log}</div>)
          )}
        </div>
      </div>
    </div>
  );
}