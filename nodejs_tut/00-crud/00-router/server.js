const express = require('express');
const path = require('path');
const mysql = require('mysql');

const app = express();
const PORT = 3000;

app.set('view engine','ejs');


app.get('/',(req, res) =>{
    res.render("<h1>Hello</h1>");
});

app.get('*',(req, res) =>{
    res.send("<h1>ERROR : 404</h1>");
});

app.listen(PORT,()=>console.log(`Server Running http://localhost:${PORT}...`));