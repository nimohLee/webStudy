/* 
1. map : 재가공(다른 형태로 변형해서 출력)
*/

// 배열의 값을 곱한 후 출력하시오
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = numbers.map(num => num + 1 );
console.log(result);

// 숫자 3개를 더해서 새로운 배열에 저장하시오
// [], [], map, push

const news = [];
numbers.map( (num) => {
    return news.push(num + num + num); // numbers에서 하나씩(num) 가져와서 세번 더해주라는거네.. 뭐하는거지 이게 ..? 걍 곱하기 3해서 넣는건데 이건
});
console.log(news); // news에다가 push했으니까 news 출력하면됨. 

const members = [
    {id: 1, nation: "Korea", auth : 3},
    {id: 2, nation: "U.S.A", auth : 1},
    {id: 3, nation: "Japan", auth : 1}
];

const user = [];

members.map((m)=>{
    return m.id % 2 == 1 ? user.push(m) : null; 
    /* members에서 하나씩 가져온 객체(m)의 id가 2로 나눴을 때 나머지가 1(홀수)이라면 ? user 배열에 push(m) : null(아니면 아무것도 안하기) */
});

console.log(user);

