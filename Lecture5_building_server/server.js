import http from 'http'

const  server =   http.createServer((req,res)=>{
  res.end('You Requested for something')
});

const port =30000;
server.listen(port,()=>console.log(`Server is running on port ${port}`));