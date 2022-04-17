const express = require('express');
const app = express();
const router = require('./router');
app.use(router);
app.use((err,req,res,next) => {
  res.send({
    status:err.status ?? 500,
    message : err.message
    
  })
})
module.exports = app;
