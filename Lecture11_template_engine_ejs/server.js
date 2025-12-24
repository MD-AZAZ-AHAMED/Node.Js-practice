import  express from 'express';

const app = express();
const port = 3000;
let products = [
  { name: 'Product 1', price: 100 },
  { name: 'Product 2', price: 200 },
  { name: 'Product 3', price: 300 },
];
app.get('/', (req, res) => {
  let name ='Azaz'
  res.render('index.ejs', { name, products });
});

app.listen(port, () => {})