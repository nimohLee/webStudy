const express = require("express");
const path = require("path");
const mysql = require("mysql");
const app = express();
const fs = require('fs');
const alert = require('alert');

let sql = fs.readFileSync('./users.sql').toString();

const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("views"));
app.use(express.urlencoded({ extended: false }));

const db = mysql.createConnection({
    host: "localhost",
    user: "login",
    password: "1234",
    database: "login"
});

const date = new Date().toISOString().substring(0,10);
db.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }else console.log('MySQL is Connected!!');
});

let loginTable;
db.query('SELECT * FROM login', function (error, results, fields) {
  if (error) throw error;
  loginTable = results;
});

app.get("/", (req, res) => {
    res.send('<a href="/addUser"><button>회원가입</button></a>');
});

app.get("/createTBL",(req, res)=>{
    db.query(sql,(err, result)=>{
        if(err) throw err
        else "registerTBL is CREATED";
    });
});

app.get("/addUser", (req, res) => {
    let title = "Member Management System";
    res.render("insert", { title });
});

app.post("/addUser", (req, res) => {
    const username = req.body.username;
    const passwd = req.body.passwd;
    let insertSQL = 'INSERT INTO register VALUES(null,?,?,?);';
    db.query(insertSQL,[username,passwd,date], function (error, results, fields) {
        if (error) throw error;
        else alert("사용자가 추가되었습니다");
      });
    res.redirect("/list");
});

app.get("*", (req, res) => {
    res.send("<h1>ERROR : 404</h1>");
});





app.listen(PORT, () =>
    console.log(`Server Running http://localhost:${PORT}...`)
);
