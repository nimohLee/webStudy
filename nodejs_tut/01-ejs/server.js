const express = require('express');
const app = express();
const path = require('path');

/* ejs 사용을 위한 middleware */
/* app.set("view engine", "ejs"); 사용하기위한 설정 */
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:false}));
// app.use(express.static("절대경로")); 폴더 보안 해제..?
app.use(express.static(path.join(__dirname,'/views/css')));

let title = "Busan it Acamemy";

app.get('/', (req, res) => {
    // res.render("파일이름만",{전달할내용})

    res.render("index",{title, sub: " > Home"}); // key, value가 똑같을 때 생략가능
});

app.get("/addUser", (req, res) =>{
    res.render("users", {title, sub : " > addUser"});
}); // form을 통한 사용자 저장하기

app.post("/addUser", (req, res) =>{
    console.log(req.body.userid);
    console.log(req.body.passwd);
});

/* 내가 만든 url을 제외한 전부 */
app.get('*',(req, res)=>{
    res.render('404',{title, sub : " > 404 Page"});
});

app.listen(3000);