const express = require("express");
const path = require("path");
const mysql = require("mysql");
const app = express();
const fs = require('fs');
const alert = require('alert');


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

app.get('/userList',(req, res) => {
    let selectAllSql = "SELECT * FROM register ORDER BY regID DESC;";
    db.query(selectAllSql,(err,results)=>{
        if(err)
            throw err;
        res.render("userList",{userSelectResult : results});
        
    });
});

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
})

app.listen(PORT, () =>
    console.log(`Server Running http://localhost:${PORT}...`)
);