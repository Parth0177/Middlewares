const express = require('express');
const app = express();

app.use((req,res)=>{
  console.log('This is a middleware function');
  res.send('Middleware executed!');
})

app.get('/',(req,res)=>{
  res.send('Hello World!!');
});

app.get('/random', (req,res)=>{
  const randomNumber = Math.floor(Math.random() * 100);
  res.send(`Random number is: ${randomNumber}`);
})

app.listen(3000,()=>{
  console.log('Server is running on port 3000');
  
})