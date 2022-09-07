const fs = require('fs');


/* 폴더 : mkdir(), rmdir() */
/* 파일 : writeFile(), unlink(), appendFile() */

/* 파일 만들기 */
/* fs.writeFile(파일이름, 내용, 콜백); 
 연속해서 실행시키면 기존 내용 덮어씀
 ->
 appendFile() 사용

 */

 let str = 'HTML, CSS, NODEJS, REACTJS';
 fs.writeFile("./files.txt",str,(err)=>{
        if(err)
            throw err
        console.log("파일작성 완료");
 });

 let appendStr = "\nJava, Spring Framework, Mysql";
 fs.appendFile("./files.txt",appendStr,(err)=>{
    if(err)
        throw err;
    console.log('파일append 완료');
 })
 
/* fs.unlink(지울파일이름, 콜백); */
fs.unlink('files.txt',(err)=>{
    if(err)
        throw err;
    console.log("files.txt 파일지움");
});