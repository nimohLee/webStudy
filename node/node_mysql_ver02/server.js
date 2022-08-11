`use strict`;

// import express
const express = require('express');
const app = express();

// import mySQL
const mysql = require('mysql');
const connection = mysql.createConnection({ // mysql connection 생성
    host: 'localhost',
    user: 'busanit',
    password: '1234',
    database: 'busanit'
});
connection.connect((err) => { // db connect 에러 예외처리
    if (!err) {
        console.log("DB Connected");
    } else {
        console.log(err);
    }
}); //connect mysql connection


/* app set */
app.set('view engine', 'ejs');



/* app user */
app.use(express.urlencoded({
    extended: false
}));

// request를 json으로 parsing 해주는 middleware
app.use(express.json());

// express에서 root를 설정해주는 middleware
app.use(express.static("views"));

//import ejs
const ejs = require('ejs');


/* app get */
app.get('/', (req, res) => {
    res.render("login", {
        title: "Home"
    });
});

app.get('/register', (req, res) => {
    res.render("register", {
        title: "Home > Register"
    });
});

app.get('/memberList', (req, res) => {
    res.render("memberList", {
        title: "Home > MemberList"
    });
});


app.listen(5000, () => console.log("Server connected"));