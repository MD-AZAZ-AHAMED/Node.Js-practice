// this file use for server creation
const express =require("express")


const app =express()

/* title,description */
/* POST /note */

const notes=[]
app.post('/notes',(req,res)=>{
    console.log(req.body)
})

module.exports =app