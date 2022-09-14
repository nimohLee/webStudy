/* 
1. Spread Operator : 값을 출력하거나 값을 이어 붙이기 = concat <== 호민 : 객체나 배열에 쌓여있는 애들을 말그대로 펼쳐준다(Spread)는 거임. 브라켓({[]}) 벗기기

    - ...객체명
    - ([...old, ...new]) : 배열(index 번호로 저장)
    - ({...old, ...new}) : 객체(key,value)
*/

const olds = [1, 2, 3, 4, 5];
const news = [6, 7, 8, 9, 10];

/* concat : 원본.concat(붙일 거) */
console.log(olds.concat(news));
console.log(...olds);

/* 연결할 때는 bracket({[]}) 모양을 확인하고 연결 */
console.log([...olds,...news]);

/* 두 개의 배열과 추가로 값 하나를 연결해서 출력 */
console.log([...olds,...news,11]);
console.log("");
console.log("--------------------------------");

/* 더하기 함수 만들어서 값을 출력하는 so */
function add(x, y){
    return x + y;
}
//console.log(add(10, 20));
const numbers = [10, 20];
console.log(add(...numbers)); // numbers가 펼쳐서 10,20이 되고 그게 add함수에 매개변수로 들어감

const users = [
    {id: 1, userid: "busan", auth: "Y"},
    {id: 2, userid: "seoul", auth: "N"},
    {id: 3, userid: "daegu", auth: "Y"}
];

const userid = {
    uid: "busan"
};
const password = {
    pwd : "12345"
};
const username = {
    uname: "yewon"
};

console.log({...uid,...pwd,...uname}); 

const user = {id : 4, userid :"daegu", auth : "Y"};

// 기존자료 3개({})가 []안에 있는 것에 이어 붙일 때 {이어붙일 객체}를 적어주면 됨
console.log([...users, {...user}]);
// ENTP 이호민의 반박 : ...user면 user 객체 {}안에 있는 걸 굳이 {}벗겨서 빼온건데 다시 {}를 ?? ... 안붙이고 user 해도 똑같음
console.log([...users,user]);
