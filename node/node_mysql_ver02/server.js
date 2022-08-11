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
    database: 'busanit',
    dateStrings: "date"

});
connection.connect((err) => { // db connect 에러 예외처리
    if (!err) {
        console.log("DB Connected");
    } else {
        console.log(err);
    }
}); //connect mysql connection

//import ejs
const ejs = require('ejs');


/* app set */
app.set('view engine', 'ejs');


/* --------app use (express' methods)-------- */
app.use(express.urlencoded({
    extended: true
}));

// request를 json으로 parsing 해주는 middleware
app.use(express.json());

// express에서 root를 설정해주는 middleware
app.use(express.static("views"));

/* --------app use (express' methods)-------- */



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
    const sql = "SELECT * FROM login ORDER BY idx DESC";
    connection.query(sql, (err, results) => {
        console.log(results);
        res.render('memberList', {
            title: 'HOME > LIST',
            users: results
        });

    })
});

app.post('/register', (req, res) => {
    let hobbies = '';
    for (let i = 0; i < req.body.hobby.length; i++) {
        if ((i + 1) != req.body.hobby.length) {
            hobbies += req.body.hobby[i] + ",";
        } else
            hobbies += req.body.hobby[i];
    }

    const sql = "INSERT INTO login VALUES (null,?,?,?,?,?,?,?,?,now())";

    connection.query(sql, [req.body.name, req.body.userid, req.body.passwd, req.body.email, req.body.gender, req.body.location, hobbies, req.body.self], (err) => {
        if (!err) {
            console.log('회원가입이 완료되었습니다');
            res.redirect('/memberList');
        } else {
            console.log(err);
            console.log('관리자에 문의하세요');
            res.redirect('/register');
        }
    });
})


app.listen(5000, () => console.log("Server connected"));