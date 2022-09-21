/* 
0. npm init -y : 모듈 관리 파일 실행(노드 쓰겠다!!) -> package.json, pacakge-lock.json, node_modules 생김
1. 필요한 모듈 설치 : npmjs.com -> 모듈 검색 -> 명령어로 설치(npm i express)
2. Server
    - protocol : http:// (80번 포트), https://(443번 포트)
    - domain : 도메인 구입 후 설정 = 그냥 사용하면 localhost(127.0.0.1)
    
    // port number, url -> node에서 설정 후 작업
    - port number : 나만이 유일하게 사용할 수 있는 통로(nodejs : 3000, reactjs : 5000, spring : 8080)
        -  동일한 URL이라도 포트번호가 다르면 다르게 접속
        - ex) localhost:80하면 http로 접속, localhost:443하면 https로 접속, localhost: 3000하면 노드js, localhost: 5000하면 리액트js ...
    - url : get(주소로 접근), post(숨겨서 전송해야 하는 것..?)-> 간단하게 get은 가져오는 거 post는 보내는 거(ex 블로그 포스팅(posting))
        
*/

    /* express 사용법 (npmjs.com 에서 express 검색하면 사용법 나옴) */

    // const express = require('express');
// url 설정(주소 설정)
// port 설정

const express = require('express');
const app = express();
const PORT = 3000;

//서버를 실행시키고
// 주소 설정(html 설정)
// 서버는 기본적으로 (req, res, 기본 콜백
// app.get(내가필요한주소, 콜백함수(req,res)=>{})
app.get('/busanit',(req,res)=>{
    console.log("Server Runnig"); // console 출력   
    res.send("Welcome Nodejs Server"); // browser 출력
})

/* localhost:포트/getUsers */
app.get('/getUsers', ( req, res )=> {
    const sql = "SELET * FROM ORDER BY id DESC";
    res.send("All Users Query => " + sql);
})
/* localhost:포트/setUsers */
app.get('/setUsers', ( req, res )=> {
    const sql = "INSERT INTO users VAULES();";
})
/* localhost:포트/deleteUsers */
app.get('/deleteUsers', ( req, res )=> {
    const sql = "DELETE FROM users WHERE id = 1";
})
/* localhost:포트/updateUsers */
app.get('/updateUsers', ( req, res )=> {
    const sql = "UPDATE users SET username=? WHERE id = 1";
})

/* 3000번 포트 열기 */
app.listen(PORT, () => console.log('3000번 포트로 접속'));
//port 번호가 정상적으로 동작하는 지를 나타내는 게 listen