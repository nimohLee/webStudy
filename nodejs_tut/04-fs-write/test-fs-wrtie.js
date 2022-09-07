const fs = require("fs");
const path = require("path");
const dirName = "20220907";
const pathJoin = path.join(__dirname , dirName);
const filePath = `${pathJoin}/20220907.txt`;
let content = "Welcome Busan it Academy";

fs.mkdir(pathJoin, (err) => {
  if (err) throw err;
  console.log("폴더가 생성되었습니다.");
});

fs.writeFile(filePath, "content", (err) => {
  if (err) throw err;
  console.log("파일이 작성되었습니다.");
});

fs.appendFile(filePath, "Hello NodeJS", (err) => {
  if (err) throw err;
  console.log("파일에 내용을 추가했습니다");
});

if (fs.existsSync(filePath)) {
  fs.unlink(filePath, (err) => {
    if (err) throw err;
    console.log("파일이 삭제되었습니다");
  });
}

if(fs.existsSync(pathJoin)){
    fs.rmdir(pathJoin,(err)=>{
        if(err) throw err;
        console.log('폴더가 삭제되었습니다');
    })
}