const express = require("express");
const mysql = require("mysql");

const app = express();

//////////////////////////////////////////////
/*////////////  MySQL DB Connection /////////*/
//////////////////////////////////////////////
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "login",
    password: "1234",
    database: "login",
});

connection.connect();

app.set("view engine", "ejs"); // ejs middleware

app.get("/", (req, res) => {
    // 버튼 보여주기위한 URL
    res.render("create");
});

app.get("/createTB", (req, res) => {
    // 클릭했을 떄 실행하는 url
    console.log("create url success");
});
app.get("/dropTB", (req, res) => {
    console.log("drop url success");
});

app.listen(3000, () => console.log("Server Running..."));
