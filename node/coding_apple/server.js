const express = require('express');
const app = express();

app.listen(8080,()=>{
    console.log('8080 server listened');
})

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
})

app.get('/pet',function(req,res){
    res.send('펫 용품을 쇼핑할 수 있는 페이지입니다.');
})

app.get('/beauty', (req,res)=>{
    res.send('뷰티 용품을 쇼핑할 수 있는 페이지');
})

app.get('/love', (req,res)=>{
    res.send('뷰티 용품을 쇼핑할 수 있는 페이지');
})