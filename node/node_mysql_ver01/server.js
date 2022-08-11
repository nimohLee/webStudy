/* 1. -----------------------------  사용을 위한 import  ---------------------------*/
const ejs = require('ejs');
const mysql = require('mysql');
const express = require('express');
const app = express();
/* ------------------------------------------------------------------------------*/

/* 3. ---------------------------------------------------------------------------*/
/* 사용할 데이터베이스 정보(url, userid, password, database 설정) 및 데이터베이스 연결정보 등록 */
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'busanit',
    password: '1234',
    database: 'busanit'
});

/* 에러 예외처리 */
connection.connect((err) => {
    if (!err) {
        console.log('데이터베이스 연결에 성공했습니다');
    } else {
        console.log(err); //err 문서를 보여줌
    }
})
/* ----------------------------------------------------------------------------- */

/* 4. -----------------어떤 html 구현 방식을 사용할 건지 : ejs 설정----------------------*/
// html -> views 폴더에 있어야
// 확장자 .ejs -> 붙이진 않음
app.set('view engine', 'ejs');

/* ----------------------------------------------------------------------------- */

/* 5. ---------------------사용할 middleware 설정 : json 처리----------------------- */
/*                    Server와 Client 사이에서 데이터를 전송할 때 필요한 작업               */
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
/* 5. end --------------------------------------------------------------- */

/* 6. -------------------------------주소관리------------------------------------ */
/* REST API */


app.get("/register", (req, res) => {
    res.render("register", {
        title: "Home > Register"
    });
});

app.get("/", (req, res) => {

    res.render("index", {
        title: "Home"
    });
});

app.get("/list", (req, res) => {
    res.render("list", {
        title: "Home > List"
    });
});

/* 6. end --------------------------------------------------------------- */

/* 2. -------------------------  서버에서 사용할 포트 설정  ---------------------------*/
let PORT = 5000;
app.listen(5000, () => console.log(`서버 구동에 성공했습니다`));
/* ------------------------------------------------------------------------------*/