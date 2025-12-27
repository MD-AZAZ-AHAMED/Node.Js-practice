import express from "express";
import mongoose from "mongoose";
import {userRegister} from './controllers/user.js';

const app = express();
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    " Link to your MongoDB Atlas database ",
    {
      dbName: "Node_js_mastery_course",
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/form-submit", userRegister );
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
