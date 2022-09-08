/* JS Object -> JSON(JavaScript Object Notation) */

const { json } = require("express");
const fs = require("fs");
const path = require("path");

const users = [
    {
        id: 1,
        userid: "busanit",
        passwd: "12345",
        gender: "M",
        regdate: "2022-09-08",
    },
    {
        id: 2,
        userid: "seoulit",
        passwd: "12345",
        gender: "F",
        regdate: "2022-09-08",
    },
    {
        id: 3,
        userid: "daeguit",
        passwd: "12345",
        gender: "F",
        regdate: "2022-09-08",
    },
];

const result = JSON.stringify(users, null, 2);
let url = path.join(__dirname, "db");

if (!fs.existsSync(url)) {
    fs.mkdir(url, (err) => {
        if (err) throw err;
    });
}

fs.writeFile(path.join(__dirname, "db", "users.json"), result, (err) => {
    if (err) throw err;
});

const user = {
    id: 4,
    userid: "jejuit",
    passwd: "11234",
    gender: "M",
    regdate: "2022-09-08",
};

fs.readFile(path.join(__dirname, "db", "users.json"), json, (err, result) => {
    if (err) throw err;
    // console.log(JSON.parse(result));
    const obj = JSON.parse(result); // 기존 json
    console.log(obj);
    obj.push({...user});
    
    const jsonObj = JSON.stringify(obj);
    console.log(jsonObj);
    /* 기존 + 새자료 : spread operator(전개연산자) = 연결하고 출력 or 쓰기 */
    fs.writeFile(path.join(__dirname,'db','users.json'),jsonObj,(err)=>{
        if(err) throw err;
    })
});
