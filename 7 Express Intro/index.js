const express = require('express');
const http = require("http");

const PORT = 3000 ;
const app = express();


app.get('/',(req,res)=>{
    res.send(`Hello From Home Page` + ` Hello ` + req.query.name);
});

app.get('/about',(req,res)=>{
    res.send(`Hello From About Page` + ` Hello ` + req.query.name);
});


app.listen(PORT,()=>console.log(`Server Is Running on port ${PORT}`));
