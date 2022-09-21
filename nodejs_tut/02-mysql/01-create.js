const express = require('express');
const mysql = require('mysql');

const app = express();

app.set('view engine', 'ejs'); // ejs middleware

app.get('/',(req, res) => { // 버튼 보여주기위한 URL
    res.render("create");
});

app.get('/createTB',(req, res) =>{ // 클릭했을 떄 실행하는 url
    res.render("create url success");
});
app.get('/dropTB',(req, res) =>{ 
    res.render("drop url success");
});

app.listen(3000, () => console.log("Server Running..."));
