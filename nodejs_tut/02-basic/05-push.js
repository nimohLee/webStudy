/* 
1. 사용자 객체
2. 권한 있는 사람만 따로 객체에 저장 : 권한 Y 표시된 사람만 따로 저장
 */
const users = [
    {
        id : 1,
        userid : "busan",
        auth : "Y"
    },
    {
        id : 2,
        userid : "seoul",
        auth : "N"
    },
    {
        id : 3,
        userid : "daegu",
        auth : "N"
    }
];
const auth = []; // 조건에 맞는 사용자 넣기위한 빈 배열

for(let i =0 ; i < users.length; i++){
    if(users[i].auth == "Y"){
        auth.push(users[i]); // 빈 배열에 auth가 Y인 user 넣기
    }
}

console.log(auth);
// 전송한다면 JSON.stringify()
console.log(JSON.stringify(auth));
console.log(auth[0]); // 배열번호 0번인 사람 출력
console.log(auth[0].userid); // 배열번보 0번인 사람 userid 출력

if( auth[0].auth == 'Y '){
    console.log("관리자 페이지에 접속합니다. 이동!!");
}

console.log(auth[0]["userid"]); // 이렇게도 쓸 수있음
console.log(auth[0]["auth"]);

const user = {id : 4, userid : "datejeon", auth : "Y"};
console.log(auth);
console.log(user);

console.log({...auth,...user});