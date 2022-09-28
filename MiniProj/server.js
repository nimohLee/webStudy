const express = require('express');
const mysql = require('mysql');
const path = require('path');
const boardRoute = require('./routes/boardRoute');
const memberRoute = require('./routes/memberRoute');

const app = express();

const PORT  = 3000;

/* DB Connection */
const db = mysql.createConnection({
    host: "localhost",
    user: "Grpware",
    password: "Grpware",
    database: "travel",
    dateStrings: "date"
});

db.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }else console.log('MySQL is Connected!!');
});

const date = new Date().toISOString().substring(0,10);


app.set("view engine","ejs");

/* use express middleware */
app.use(express.static(path.join(__dirname,'views')));
app.use('/assets/',express.static(path.join(__dirname,'assets')));
app.use('/css',express.static(path.join(__dirname,'css')));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get("/",(req,res)=>{
    res.render('index');
});

app.use('/board',boardRoute);
app.use('/member',memberRoute); 



app.get("/member",(req,res)=>{
    res.render('member/memberList');
});

app.listen(PORT,()=>{console.log(`localhost:${PORT} is connected`)});