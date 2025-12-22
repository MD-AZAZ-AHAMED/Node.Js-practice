import express from 'express';
import path from 'path';


const app = express();

const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 3, name: 'Product 3', price: 300 },
];
//send response
app.get('/', (req, res) => {
  //res.json({ message: 'Fetched all products', products:products, success:true, });

  const dir=path.resolve();
  const url =path.join(dir,'index.html');
  console.log('Full path =',url);
  res.sendFile(url)
})


const  port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});