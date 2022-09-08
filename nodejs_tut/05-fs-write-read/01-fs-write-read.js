/* 
    ** fs모듈, path 모듈    
    1. 텍스트파일 : fs.writeFile();
    2. 절대경로 : path.join();
    3. 디렉토리 생성 : fs.mkdir();
*/

/* directory 생성 -> 존재하면 건너뜀 */
const fs = require('fs');
const path = require('path');
let dirName = 'JSON';
/*
if(!fs.existsSync(dirName)){
    fs.mkdir(path.join(__dirname,dirName),(err)=>{
        if(err) throw err;
        console.log(dirName + '폴더 생성완료');
    })
}
let message = "2022-09-08 Login을 기록합니다..."
fs.writeFile(path.join(__dirname,"JSON","file.txt"),message,(err)=>{if(err) throw err; console.log("file.txt 생성 + ")});
*/

/* readFile()  : 글자를 정상적인 출력을 하기 위해 toString() 메서드, 'utf8'(옵션값에 넣어주기) -> 'utf8' 방식 선호 */
/* 
    fs.readFile("파일이름",콜백(err,result))
*/
let str;
fs.readFile(path.join(__dirname,dirName,'file.txt'),'utf8',(err,result)=>{
    if(err) throw err;
    // str = result.toString();
    console.log(result);
});

fs.unlink(path.join(__dirname,dirName,'file.txt'),(err)=>{if(err) throw err;})

/* 
    1. JSON 파일
    2. 절대경로
    3. 디렉토리 생성
    4. jsObject -> JsonObject -> fs.writeFile();
*/