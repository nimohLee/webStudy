const express = require('express');
const mysql = require('mysql');

const app = express();

const PORT  = 3000;

app.get("/",(req,res)=>{
    res.send("<h1>Hi</h1>");
});
app.listen(PORT,()=>{console.log(`localhost:${PORT} is connected`)});