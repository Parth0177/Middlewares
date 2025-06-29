const express = require('express');
const app = express();

app.use((req,res,next)=>{
  console.log('This is a 1st Middleware function!');
  next(); // Call next() to pass control to the next middleware or route handler
});

app.use((req,res,next)=>{
  console.log('This is a 2st Middleware function!');
  next(); // Call next() to pass control to the next middleware or route handler
});


app.get('/',(req,res)=>{
  res.send('Hello World!!');
});

app.get('/random', (req,res)=>{
  const randomNumber = Math.floor(Math.random() * 100);
  res.send(`Random Number is: ${randomNumber}`);
})

app.listen(3000,()=>{
  console.log('Server is running on port 3000');
  
})