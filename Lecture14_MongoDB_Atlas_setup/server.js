// USer Name MongoDB Atlas Project : mdazazahamed_db_user
// Password:  4iMbQna4fMhWQV99



import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose
  .connect('Link to your MongoDB Atlas database ', {
    dbName: 'nodejs_mastery_course',
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

const port = 3000;
app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);

