const express = require("express");
const path = require("path");
const mysql = require("mysql");
const app = express();
const fs = require('fs');
const alert = require('alert');
const e = require('express');


const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"views")));
app.use(express.static(path.join(__dirname,"assets/css")));
app.use(express.urlencoded({ extended: false }));

const db = mysql.createConnection({
    host: "localhost",
    user: "login",
    password: "1234",
    database: "login",
    dateStrings: "date"
});

db.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }else console.log('MySQL is Connected!!');
});

const date = new Date().toISOString().substring(0,10);

app.get('/',(req, res) => {
    res.render('index');
})

app.get('/userList',(req, res) => {
    let selectAllSql = "SELECT * FROM register ORDER BY regID DESC;";
    db.query(selectAllSql,(err,results)=>{
        if(err)
            throw err;
        res.render("userList",{userSelectResult : results});
        
    });
});

app.get('/addUser',(req, res) => {
        res.render("addUser");
});

app.post('/addUser',(req,res) => {
    let addUserSql = 'INSERT INTO register VALUES(null, ?, ?, now());';
    db.query(addUserSql,[req.body.username,req.body.passwd],(err)=>{
        if(err) throw err;
        else res.redirect('/userList');
    })
})

app.get('/delUser/:id',(req, res)=>{
    //html form -> req.body.name
    // console.log(req.params.id);
    const id = req.params.id;
    let deleteUserSql = "DELETE FROM register WHERE regID = ?;";
    db.query(deleteUserSql,[id],(err)=>{
        if(err)
            throw err;
            else {console.log(id+"번 사용자가 삭제되었습니다"); res.redirect('/userList');}
    })
});

app.get("/upUser/:id", (req, res) => {
    let sql = 'SELECT * FROM register WHERE regID = ?;';
    db.query(sql, [req.params.id], (err,result)=>{
        if(err) throw err
        else{res.render('upUser',{result}); 
    console.log(result)}
    })
});

app.post("/upUser", (req, res) => {
    let sql = 'UPDATE register SET username = ?, passwd = ?, regdate = now() WHERE regID = ?;';

    const user = {
        id: req.body.regID,
        name: req.body.username,
        pw: req.body.passwd,
    };

    db.query(sql, [user.name,user.pw,user.id], (err)=>{
        if(err) throw err
        else{ 
            console.log(req.body.regID + "번 회원이 수정되었습니다");
            res.redirect('/userList');}
    });
});

app.get('/userView/:id', (req, res) => {
    let sql = 'SELECT * FROM register WHERE regID = ?;';
    db.query(sql,[req.params.id], (err,result)=>{

        if(err) throw err
        else res.render("userView",{result});
    });
});

app.listen(PORT, () =>
    console.log(`Server Running http://localhost:${PORT}...`)
);