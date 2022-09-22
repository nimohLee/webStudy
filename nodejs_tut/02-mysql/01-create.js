const express = require("express");
const mysql = require("mysql");
const path=  require('path');
const app = express();

//////////////////////////////////////////////
/*////////////  MySQL DB Connection /////////*/
//////////////////////////////////////////////

app.set("view engine", 'ejs'); // ejs middleware
app.set('views',path.join(__dirname,'views'));

const db = mysql.createConnection({
    host: "localhost",
    user: "login",
    password: "1234",
    database: "login",
});

db.connect((err)=>{
    if(!err){
        console.log("Database connection complete!!");
    }
    else
        console.log("db connection 에러남");
});

//////////////////////////////////////////////
/*//////////  Set Express Middleware /////////*/
//////////////////////////////////////////////

app.get("/", (req, res) => {
    // 버튼 보여주기위한 URL
    res.render('create');
});

app.get("/list", (req, res) => {
    // 버튼 보여주기위한 URL
    let sql = "SELECT * FROM login;"
    db.query(sql, (err, result) => {
        res.render('list', {result : result});
    });
});

app.get("/createTB", (req, res) => {
    let sql = "CREATE TABLE login(userid varchar(30),passwd varchar(20));"
    db.query(sql,(err)=>{
        if(err)
            throw err;
        else
            console.log("sql complete");
        res.redirect('/');
    })
});

app.get("/dropTB", (req, res) => {
    let sql = "DROP TABLE login;"
    db.query(sql,(err) => {
        if(err)
            throw err;
        else 
            console.log("sql complete");
        res.redirect('/');
    })
});

app.get("/selectAll", (req, res) => {
});
app.listen(3000, () => console.log("Server Running..."));