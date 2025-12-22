import express from 'express';

const app = express();
const port = 3000;

// C = Create  => POST (METHOD)
// R = Read    => GET  (METHOD)
// U = Update  => PUT  (METHOD)
// D = Delete  => DELETE (METHOD)
app.get('/about',(req,res)=>{
    res.send("Hello This is a Response");
})

app.post('/create-user',(req,res)=>{
    res.send("User Created Successfully");
})

app.put('/update-user',(req,res)=>{
    res.send("User Updated Successfully");
})

app.delete('/delete-user',(req,res)=>{
    res.send("User Deleted Successfully");
})

app.listen(port,()=>console.log(`Server is running ${port}`))