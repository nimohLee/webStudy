/* 
1. const fs = require('fs'); // FileSystem 줄임말. npm으로 따로 설치 안해도 node.js에 기본적으로 내장되어있는 모듈
2. directory 생성 : mkdir(폴더이름, 콜백함수)
3. directory 제거 : rmdir(폴더이름, 콜백함수) // 삭제 옵션이 필요할수도.. => 폴더안에 파일이 있으면 삭제 x 등등
4. file 생성 : writeFile(파일이름, 쓸내용, 콜백함수)
    - 파일이름은 상대경로(./) 보다는 절대경로(c, d, e. /)를 사용하는 것을 추천
        - 절대경로 : const path = require('path'); // 이것도 fsㄹ아 마찬가지로 node.js 내장모듈
                     path.join(폴더명,폴더이름...) 을 이용해서 절대경로 설정
5. file 제거 : unlink(삭제할 파일이름, 콜백)

6. 파일 쓰기 : json 파일 생성한 후 json 파일을 연결해서 다시 쓰기
                spread operator + readFile()
7. 중복 데이터 입력을 방지하기 위한 : Object.keys()

8. I/O : 존재하는 지 확인 후생성 if 예외처리
    - if(!fs.existsSync() ){ mkdir, writeFile}
    - if ~else x
*/

const fs = require('fs');
const path = require('path');

// 존재하지 않으면 생성! 존재하는데 또 만들 필요 없음
if( !fs.existsSync('./files') ){
    /* I/O는 무조건 예외처리 필요
       콜백함수(error => throw)가 자바에서 try-catch 랑 비슷한 듯 */
    fs.mkdir('./files',(error)=>{
        if(error)
            throw error;
        
        // console.log('files directory is made.')
    });
}

if( !fs.existsSync('./json') ){
    /* I/O는 무조건 예외처리 필요
       콜백함수(error => throw)가 자바에서 try-catch 랑 비슷한 듯 */
    fs.mkdir('./json',(error)=>{
        if(error)
            throw error;
        
        // console.log('files directory is made.')
    });
}

//file.txt 생성
if( !fs.existsSync("./files/file.txt") ){
    const message = 'Busna it Academy';
    
}else{
    console.log("failed : file existed..");
}

const users = [{
    id: 1, username : "Korea"
},{
    id: 2, username : "Brazil"
},{
    id: 3, username : "China"
},
];
if( !fs.existsSync("./json/jsObj.json") ){
   fs.writeFile(path.join(__dirname+"/json/jsObj.json"),JSON.stringify(users,null,2),'utf-8',(err)=>{
    if(err)
        throw err;
   });
}else{
    console.log("failed : file existed..");
}