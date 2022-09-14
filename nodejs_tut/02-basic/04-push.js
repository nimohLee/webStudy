/* 객체(배열) = Object(json) - 자료를 묶음으로 처리(대량의 데이터 처리)
인덱스(i,idx) : 변수명은 하나로 사용하면 자료를 구분할 수 있어야함 (ex. 호민짱[i]) <--배열임
배열 쓰면 자바처럼 반복문(forEach 같은 거)이랑 같이 사용

jsObje( key : "value") - 데이터 전송할 때는 JSON( "key" : "value" )으로 변환시켜줘야함
--> 왜냐하면 웹에서(서버 등) 데이터 송수신할 때 문자밖에 못 알아먹는데 JSON이 객체를 문자처럼 보이게 속여주는 거임
--> 사용법 : jsObject -> JSON.stringify(json으로 바꿀 객체) -> JSON.parse(객체로 바꿀 json) 사용

/* 밑에 부터는 배열, 객체 메서드 */
/* 
1. push : 배열이나 객체 마지막에 요소 추가 (push만 알아도 된다함. 근데 내가 보기엔 다 알아야함 ㅋㅋ 적어도 splice, sort 까지는)

2. pop : 배열이나 객체의 마지막 요소를 제거
3. shift : 배열이나 객체의 맨 앞의 요소 제거
4. unshift : 배열이나 객체의 맨 앞의 요소를 제거

5. splice : 배열이나 객체의 임의 내용을 제거
6. sort : 정렬
*/

/* 1. push : 자바스크립트는 타입 크게 신경쓰지 않아도 됨 -> 근데 이거 때문에 문제 많아서 요새 기업들 TypeScript 써본사람들 많이 찾더라.. 나도 해볼라고 ㅜ */
const jsObj1 = [1, 2, 3, "NodeJS", false]; // 숫자, 문자열, boolean 다 들어감
console.log("객체의 개수 : "+ jsObj1.length);
console.log(`객체의 개수 : ${jsObj1.length}`);
console.log("");

jsObj1.pop(); // 객체의 마지막 요소 제거
console.log("pop()으로 제거된 객체(배열)에 남은 거 : "+jsObj1);

/* 2. push() + spread operator(... : 전개연산자 - 기존자료와 최신자료를 연결할 때..?라고 하시는데 아니고 배열이나 객체 쫙 펼쳐서 하나하나 받아오는 거. 하나하나 가져오기때문에 ...객체(배열) 하면 {}나 []없이 값만 가져옴)
push({...old, ...new}) */
jsObj1.push("ReactJS"); // 객체 마지막 요소 추가
console.log("push()로 하나 추가된 객체(배열) : "+jsObj1);

jsObj1.push("HTML","CSS",3); // 객체 마지막 요소 여러 개 추가
console.log("push()로 여러 개 추가된 객체(배열) : "+jsObj1);
console.log("");
console.log("-------------------------------------------------------------");

/* 3. -------------------------- */
jsObj1.shift(); // 객체 첫번째 요소 제거
console.log("shift()로 첫번째 요소 제거된 객체 : "+ jsObj1);

jsObj1.unshift(true); // 객체 첫번째 요소 추가. true를 추가한거임
console.log("unshift()로 첫번째 요소 추가된 객체 : "+jsObj1);
console.log("-------------------------------------------------------------");

/* 객체명.splice(배열번호, 개수) : 임의의 내용 제거 */
/* 객체명.sort() : 정렬 */
const jsObj2 = [5, 1, 2, 6, 3];
jsObj2.splice(2, 2); //splice(2, 2) : 2번 인덱스(배열 인덱스는 0부터 시작) 부터 2개 제거
console.log(jsObj2);
console.log(jsObj2.sort()); // sort된 거 출력. 자바스크립트에서 알아서 숫자 영문자 한글 정렬해줌