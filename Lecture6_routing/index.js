import http from 'http';
const server = http.createServer((req, res) => {
  console.log(req);
  res.end('<h1>Your Request has been accepted</h1>');

  if(req.url === '/qdm'){
    res.end('<h1>Welcome to QDM</h1>');
  }
  else if(req.url === '/home'){
    res.end('We are not able to show anything about home');
  }
  else{
    res.end('<h1>404 Page Not Found</h1>');
  }
})

const PORT = 3000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));