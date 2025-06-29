const express = require('express');
const app= express();
const PORT=3001;

app.use((req,res,next)=>{
  req.responseTime = new Date(Date.now()).toString();
  console.log(req.method,req.path, req.responseTime, req.hostname);
  next();
});

app.get('/',(req,res)=>{
  res.send("Kya re bantai!!")
});

app.get('/random', (req,res)=>{
  const randomNumber = Math.floor(Math.random() * 100);
  res.send(`Random Number is: ${randomNumber}`);
});

app.get('/about', (req,res)=>{
  res.send("This is about page");
});


app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
});