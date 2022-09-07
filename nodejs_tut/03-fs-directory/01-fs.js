/* 
fs : File System I/O -> 예외처리 필수 
    - 필요하다면 require 가져와서 사용
    - directory 생성/삭제, file 쓰기/삭제/이어붙이기
    - file 입출력시
        - 동기화(sync)
        - 비동기화(async)
    */

const fs = require('fs'); // node.js 설치할 때 같이 설치되는 모듈

/* fs.mkdir(); // 디렉토리 만들기 -> 콜백함수를 이용해서 예외처리 무조건 해야함
fs.writeFile(); //  파일 만들기 -> 콜백함수를 이용해서 예외처리 무조건 해야함 */
/*
fs.mkdir("files", function(err) {
    if(err)
        throw err; // 예외 생기면 출력
    console.log('files 폴더 생성');
});

fs.mkdir('./json',(err) => {
    if(err)
        throw err;
    console.log('json 폴더 생성');
})

fs.rmdir("files", function(err) {
    if(err)
        throw err; // 예외 생기면 출력
    console.log('files 폴더 삭제');
});

fs.rmdir('./json',(err) => {
    if(err)
        throw err;
    console.log('json 폴더 삭제');
})
*/
/* 
    상대경로 
    절대경로 : 실무 또는 프로젝트 -> path
     - 현재 위치, 현재 파일이름, 현재 파일이름의 확장자를 관리하는 모듈
*/

/* 내가 있는 디렉토리 위치 */
console.log(__dirname);
/* 디렉토리 위치와 파일이름까지 */
console.log(__filename);

const path = require('path'); // 파일을 상세하게 관리할 때

console.log(path.parse(__filename).name); // 현재파일의 이름
console.log(path.extname(__filename)); // 현재파일의 확장자

/* path.join( 디렉토리, 파일명 ) 경로 + 파일을 연결해서 절대경로로 표 시할 때 */
const curDir = __dirname;
const filename = 'index.html';

/* 디렉토리 + 파일 연결 : 절대경로 */
const result = path.join(curDir, filename);
console.log(result);