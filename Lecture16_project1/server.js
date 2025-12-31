import express from 'express';
import mongoose from 'mongoose';
import {shortUrl,getOriginalUrl} from './Controllers/url.js';

const app = express();

app.use(express.urlencoded({ extended: true }));


mongoose.connect('mongodb+srv://mdazazahamed_db_user:4iMbQna4fMhWQV99@cluster0.yhtd3vc.mongodb.net/',
  {
    dbName:'Nodejs_tutorials'
  }
)
.then(() => console.log("MongoDB Connected"))
.catch((err)=>console.log(err));

//rendering The ejs file
app.get('/', (req, res) => {
  res.render('index.ejs', { shortUrl: null });
});

//Shorting URL Logic
app.post('/short', shortUrl);

//Redirect to original url using short code:dunamic riuting/Dynamic ROute to handle redirection
app.get('/:shortCode',getOriginalUrl)


// Setting up the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});