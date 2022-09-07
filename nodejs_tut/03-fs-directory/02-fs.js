const fs = require('fs');
const dirName  = 'data';

/*

if(fs.existsSync("data"))
    console.log('폴더가 존재합니다');
else
    fs.mkdir('data',(err)=>{
        if(err)
            throw err 
        console.log(dirName + "폴더가 생성되었습니다");
});
*/
/* 빈 디렉토리 삭제할 때 */
/* 디렉토리 안에 파일이 존재하면 강제로 폴더 삭제  */

/*
if(fs.existsSync('data')){
    fs.rmdir('data',{recursive  : true,force : true},(err)=>{
        if(err)
            throw err
        console.log('삭제가 완료되었습니다');
    })
}else {
    console.log('존재하지 않는 폴더입니다');}
*/