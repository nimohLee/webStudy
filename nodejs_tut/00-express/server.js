const express = require('express');
const app = express();
const path =  require('path');

/* set url : method="post" 보이지 않으면 app.get(); */
app.get('/',(req,res)=>{
    res.send("Welcome Nodejs Server");
});//localhost:3000

app.get('/users',(req,res)=>{
    res.send("<h1>users에 오신것을 환영합니다</h1>");
});//localhost:3000/users

app.get("/json",(req,res)=>{
    res.json({"userid":"busanit"}); // 브라우저에서 출력
});//localhost:3000/json

/* app.listen(port,callback) */
app.listen(3000,(error)=>{
    if(error)
        throw error;
    else
        console.log("Server Running port 3000...");
});