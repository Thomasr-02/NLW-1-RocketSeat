const express = require(express)

const routes = express.Routes();

routes.get('/', (req, res)=>{
  res.send("Hello world!");   
})
