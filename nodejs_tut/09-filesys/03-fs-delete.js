const fs = require("fs");


/* 파일 삭제 후 폴더 비워지면 폴더 삭제 */
if (fs.existsSync("./json/jsObj.json")) {
    fs.unlink("./json/jsObj.json", (err) => {
        if (err) throw err;
        else console.log("json 파일이 삭제되었습니다.");
        if (fs.existsSync("./json")) {
            fs.rmdir("./json", { force: true }, (err) => {
                if (err) throw err;
        
                console.log("폴더가 삭제되었습니다");
            });
        } else {
            console.log("삭제할 폴더가 없습니다");
        }
    });
}
