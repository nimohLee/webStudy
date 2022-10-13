/* import */
const express = require("express");
const mysql = require('mysql');
const cors = require("cors");
const path = require("path");

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'lhm52030406',
    // @ts-ignore
    port: '3306',
    database : "jspdb",
    // @ts-ignore
    dateStrings : 'date'
});

const app =  express();
const PORT = 5003;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors()); // nodejs <- 통신 -> reactjs
app.use(express.static(path.join(__dirname, '..','client/build')));
console.log(path.join(__dirname,'..','client/public/index.html'));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'..','/client/build/index.html'));
})

app.post("/setUserid", (req,res)=>{
    // console.log(req.body.userid);
})


app.listen(PORT,()=>{console.log("localhost opened")});