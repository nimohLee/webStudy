/* 
1. npm init -y ( 프로젝트 폴더 당 한번만 하면 됨) : node_modules랑 package.json 있으면 할 필요 x)
2. express module 설치
3. require()
4. port number 3000
5. 주소설정후 html
*/
const express = require('express');
const path = require('path');
const app = express(); // express모듈을 app이라는 이름의 변수로 사용하기

app.get('/',(req,res)=>{
    res.send("<h1>Welcome Busan it Website</h1>")
})


// 주소/getBoardList 접속하면 ()=>{ 안에꺼 실행}
app.get('/getBoardList',(req,res) => {
    /* res.sendFile은 서버에 file 보낸다는 거 
       여기서는 getBoardList.html 보냄 
       path 모듈 사용해서 파일경로를 절대경로로 넣어줘야함 */
    res.sendFile(path.join(__dirname,'getBoardList.html'));
})

const PORT = 3000;
app.listen(PORT, () => {console.log(`Server Running PORT ${PORT}`)});

