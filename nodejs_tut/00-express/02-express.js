const express = require('express');
const app = express();

//shopping : users, items
//users : 전체보기 , 살제보기, 입력, 수정 , 삭제, 검색


app.get('/users',(req, res)=>{
    res.send("사용자 전체 보기");
});

app.get('/users/getOne/5', (req, res) =>{
    res.send("5번 사용자 전체 보기");
})

app.get('/users/insert', (req, res) => {
    res.send("사용자 등록하기");
});

app.get('/users/update/5', (req, res) => {
    res.send("5번 사용자 수정하기");
});

app.get('/users/delete/5', (req, res) => {
    res.send("5번 사용자 삭제하기");
});

app.get('/users/search/busanit', (req, res) => {
    res.send("검색단어 busanit 검색하기");
});


//items : 전체보기, 상세보기, 입력, 수정, 삭제, 검색

app.listen(3000);