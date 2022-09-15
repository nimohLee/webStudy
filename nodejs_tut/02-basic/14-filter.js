/* 
filter
1. 데이터를 걸러내어 배열로 return
2. 사용방법은 forEach와 거의 동일
3. filter + forEach
*/

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = array.filter((arr)=>{
    /* return 뒤에 걸러낼 조건 */
    return arr % 2 == 0; // 2로 나눈 나머지가 0인 것(짝수) 모아서 배열로 return
});
result.forEach(arr => console.log(arr));


/* chaining method */
/* 위에 filter한 거랑 forEach 합친다는 뜻
filter한 결과가 forEach에 그냥 굳이 나눠서 할필요없이 Chain(체인)으로 건다는 거 
filter랑 forEach뿐만아니라 이렇게 메서드 계속 이어나가는 걸 체이닝 메서드(chaining method)이라고 함*/
const result2 = array.filter((arr)=>{
    return arr % 2 == 0;
}).forEach(arr => console.log(arr));

const users = [
    {id: 1, username: 'KIM', auth: false},
    {id: 2, username: 'PARK', auth: true},
    {id: 3, username: 'CHOI', auth: false}
];

const result02 = users.filter( (user) => {
    return user.auth == false; // filter는 배열을 리턴함
}).forEach(arr => console.log(arr));

/* const result02 = 근데 밑에서 console.log를 직접해주기 때문에 변수로 안해도 출력됨*/
users.filter( (user) => {
    return user.auth == false; // filter는 배열을 리턴함
}).forEach(arr => console.log(arr.username+"님은 접근하실 수 없습니다;;"));

/* 위에랑 똑같은데 한줄이면 return 필요없다는 거를 보여줌 */
users.filter((user) => user.auth == false)
    .forEach(u => console.log("Access denied : " + u.username));

/* 
1. filter + push + spread Operator : 다른 배열에 저장
 */
const members = [
    {id: 1, nation: "Korea", auth : 3},
    {id: 2, nation: "U.S.A", auth : 1},
    {id: 3, nation: "Japan", auth : 1}
];

const guest = []; //[sp]

// auth가 1인 값을 filtering 한 후 새로운 배열에 저장하시오.
members.filter((member)=>{
    if( member.auth < 3 ){ // member 하나씩 돌면서 auth가 3보다 작으면
        guest.push(member); // guest에다가 push(배열 끝에 추가)
    }
});

console.log(guest);
console.log(...guest);