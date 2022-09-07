const fs = require('fs');
const dirName = 'files';
const path = require('path');
 
const pathJoin = path.join(__dirname,dirName);


fs.mkdir(dirName,(err)=>{
    if(err)
        throw err;
    console.log("폴더 생성됨")
});


// 절대경로
fs.mkdir(pathJoin,(err)=>{
    if(err)
        throw err;
    console.log("폴더 생성됨")
});
fs.rmdir('./files2',(err)=>{
    if(err)
        throw err;
    console.log("files2 폴더가 삭제되었습니다")
})