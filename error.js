const express = require('express');
const app = express();


app.use("/api", (req,res,next)=>{
  let {token} = req.query;
  if(token==='giveaccess'){
    next();
  }else{
    res.status(401).send('Unauthorized access');
  }
});
app.get('/wrong',(req,res)=>{
  abcd = abcd ;
});

app.use((err,req,res,next)=>{
  console.log("ERROR OCCURED!");
  next(err);
});

app.use((err,req,res,next)=>{
  console.log("ERROR HANDLER!");
  res.status(500).send('Something went wrong!');
  next(err);
});


app.get('/api', (req,res)=>{
  res.send('data')
})


app.listen(3001, ()=>{
  console.log('Server is running on port 3001');
})