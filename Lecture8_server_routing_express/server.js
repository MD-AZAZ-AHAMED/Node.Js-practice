import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('You are requested for home route');
});

app.get('/about', (req, res) => {
  res.send('You are requested for about route');
})

const  port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});