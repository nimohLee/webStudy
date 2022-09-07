/* 
    command = console = terminal = powershell : 브라우저 실행 x 
    res.send() : 브라우저에서 실행
*/
console.log("Welcome Home");

/* 
    let 값의 변경이 있을 때(변수 재할당)
    - for(let i = 0;....)

    그 외에는 모두 const
    const pi = 3.14;
    pi = 5; //재할당 하면 error
*/

console.log("1.-------------------------------------------------");
const num = 10;
const str = "Busan It Academy";

console.log(num); //***/
console.log("숫자는 %d", num);
console.log("숫자는 %i", num);

console.log(str); //***/
console.log("글자는 %s", str);

/* 텍스트 + 변수 */
console.log("출력되는 숫자 : " + num); //***/
console.log(`출력되는 글자 : ${str}`); //***/

console.log("");
console.log("2. function----------------------------------------------");
