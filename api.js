const express = require('express');
const app = express();


app.use("/api", (req,res,next)=>{
  let {token} = req.query;
  if(token==='giveaccess'){
    next();
  }else{
    res.status(401).send('Unauthorized access');
  }
})

app.get('/api', (req,res)=>{
  res.send('data')
})


app.listen(3001, ()=>{
  console.log('Server is running on port 3001');
})