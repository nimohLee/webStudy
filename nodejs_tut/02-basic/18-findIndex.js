/* 
1. findIndex() : 검색된 내용의 인덱스를 리턴 : []
2. Object.keys(객체명) : 객체배열 인덱스번호 또는 전체 개수 출력 [{},{},{}]
*/

const names = ['KIM','LEE','PARK','PARK'];
const idx = names.findIndex(n => n == 'PARK');
console.log(idx);

//객체안에 데이터가 몇 개 있는지??
// 객체 배열 번호도 출력
const users = [
    {id: 1, userid: "busan"},
    {id: 2, userid: "seoul"},
    {id: 3, userid: "daegu"}
];

console.log(Object.keys(users));
console.log(Object.keys(users[0]));

console.log(Object.values(users));
console.log(Object.values(users[0]));