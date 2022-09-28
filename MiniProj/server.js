const express = require('express');
const mysql = require('mysql');
const path = require('path');

const app = express();

const PORT  = 3000;


app.set("view engine","ejs");

app.use(express.static(path.join(__dirname,'views')));
app.use('/assets/',express.static(path.join(__dirname,'assets')));
app.use('/css',express.static(path.join(__dirname,'css')));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get("/",(req,res)=>{
    res.render('index');
});

app.get("/board",(req,res)=>{
    res.render('board/boardList');
});

app.get("/member",(req,res)=>{
    res.render('member/memberList');
});

app.listen(PORT,()=>{console.log(`localhost:${PORT} is connected`)});