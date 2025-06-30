const express = require('express');
const app = express();

const ExpressError = require('./ExpressError');


app.use("/api", (req,res,next)=>{
  let {token} = req.query;
  if(token==='giveaccess'){
    next();
  }
  throw new ExpressError("You don't have access to this API", 401);
});


app.get('/api', (req,res)=>{
  res.send('data')
})


app.listen(3001, ()=>{
  console.log('Server is running on port 3001');
})