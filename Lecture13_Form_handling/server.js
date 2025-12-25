import express from 'express';



const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index.ejs');
})

app.post('/form-submit', (req, res) => {
  console.log(req.body);
  res.json({
    message:'Form submitted successfully!',
    success: true,
  })
})

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
