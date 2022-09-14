const { json } = require('express');

/* jsObject */
const user ={
    id : 1,
    userid : "KIM",
    location : "Busan",
    hobby :{ // 객체 안의 객체. 사용법 동일
        reading: true,
        sports : "baseball",
        객체안에취미안에함수 : (a)=>{ console.log(a + " 이렇게 하면 코드 있어보임 ㅋㅋ") } // 객체 안에 객체안에 함수. function(){}로 바꿔 쓸 수 있다
    },
    grade : 4,
    lecture : ["HTML", "CSS", "NodeJS"], // 객체 안의 배열
    객체안에함수 : function(){ // 객체 안에 함수도 넣을 수 있음. 강사님이 안 알려주시길래 ㅋㅋ
        console.log("다 출력하기"+this.id + this.userid + this.location + this.hobby.sports + this.grade);
    }
};
console.log(user.id);
console.log(user.userid);
console.log(user.hobby);
console.log(user.hobby.reading); 
console.log(user.hobby.sports);
console.log(user.lecture[2]);
console.log(user["location"]);
console.log(user.hobby.객체안에취미안에함수("Hello"));
console.log(user.객체안에함수()); // 객체 안에있는 함수


/* 전송한다 가정하고(Server <-> Client) js Object -> JSON */
// const jsonObj = JSON.stringify(user, null, 2);
// console.log(jsonObj);

/* 수신했다 가정하고 JSON -> js Obejct*/
// console.log(JSON.parse(jsonObj));

const jsonObjOne = JSON.stringify(user, ["userid"]); // 잘 안씀. user 객체의 userid만 json으로 변경해서 출력
console.log(jsonObjOne);

const jsonObjTwo = JSON.stringify(user,["grade"]);
console.log(jsonObjTwo);

// 사용자의 지역(location)이 Busan이면 값을 출력하고 아니면 "Not Found"를 콘솔에 출력하시오
// ? 을 사용하시오(삼항연산자라고 함)
// 조건 ? 참일때 : 거짓일때
/* 조건 */ user.location == "Busan" 
/* 참일 때*/ ? console.log(user.location) 
/* 거짓일 때 */ : console.log("Not Found");
// 원래는 한줄로 쭉 쓰는데 그냥 나눠봄. 원래는 user.location == "Busan" ? console.log(user.location) : console.log("Not Found");
// 근데 참이나 거짓일 떄 실행할 게 길면 함수로 만들어서 쓸 수 있음

const 호민짱함수 = ()=> {
    let 호민쓰 = ['짱','짱짱'];
    호민쓰.forEach((호민)=>{
        console.log("호민이는"+호민);
    })
}

/* 조건                  ? 조건이 참일때 :  조건이 거짓일 때 */
user.location == "Busan" ? 호민짱함수() : console.log("구라였음");


// const result = JSON.stringify(user, (key, value) =>{
//     return user.location = "Busan" ? value : "Not Found" // user location이 Busan이면 value 리턴, 아니면 Not Found 리턴
// });
// console.log(result);

/* 정석 if문으로 한 거 */
// const result = JSON.stringify(user);
// if(JSON.parse(result).location == "Busan"){
//     console.log(result);
// }else{
//     console.log("Not Found");
// }


/* 삼항연산자 : 짧은 if */
const num1 = 10;
const num2 = 5;
const arr = [1,2,3,4,5];

/* num1이 num2보다 크면 "num1이 더 큽니다" 출력 */
/* 결과를 담는 변수 생성 */
const result = num1 > num2 ? "num1" : "num2";
console.log(`${result}이 더 큽니다.`)

/* 결과를 담는 변수 생성 X
    배열 안에 값이 있으면 내용을 출력하고 없으면 "배열이 비어있습니다." */
// length > 0
arr.length > 0 ? console.log(arr) : console.log("배열이 비었습니다.");
