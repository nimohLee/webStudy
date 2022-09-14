/* 
1. for(let 별명 of 객체명) {}
2. 객체명.forEach((별명) => {출력코드}) *** 이걸 더 많이 씀 
3. for
*/
const colors = ["#fff", "#f00", "#0f0", "#00f", "ivory"];
for(c of colors){
    console.log(`<table style="color : ${c}"></table>`);
}

const str = "Busanit"; //문자열(String)은 문자(Character)의 배열(객체)
//"Busanit".forEach((s)=>console.log(s))도 아래랑 똑같음
for(s of str){
    console.log(s);
}

const users = [
    {username : "KIM"},
    {username : "PARK"}
];

//index가 필요없이 값을 출력하는 곳에서
for(let user of users){
    console.log(user);
    console.log(user.username);
}
console.log("");
console.log("");
console.log("--------------------------------------------------------------------------------------------------")

/* 졸려죽겠다 살려줘 */

/* 2. 객체명.forEach((별명) => {출력코드 }) **중요 */
const arr = ["Spring", "Summer", "Fall", "Winter"];

//1줄로 표현할 때
arr.forEach(a => console.log(a));

//2줄 이상으로 표현할 때
arr.forEach((a)=>{
    console.log("사계절을 출력하시오.");
    console.log(a);
}); // 제목 + 내용 : 2줄 처리

//index 번호도 출력
arr.forEach((a , i)=>{ // (Value, Index) index는 일반 배열 인덱스처럼 0부터 배열길이 만큼 돌아감
    console.log(i+"번째 값은 "+a);
});

// 짝수만 구분해서 배열에 따로 저장할 떄 (push)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evens = []; // 짝수만 저장하는 배열

// 값 % 2 == 0 : 짝수 = > push
// for => 짝수 검사 => push
numbers.forEach((num) => {
    if( num % 2 == 0){  // num을 2로 나눈 나머지(%)가 0인 경우 (2, 4, 6, 8)
        evens.push(num);
    }
})

[1, 2, 3, 4].forEach((num)=>{
    //  이런식으로 변수 선언 따로 안하고 배열 그대로 돌릴 수도 있음
})

console.log("짝수 배열 evens : " + evens);

