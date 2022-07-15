// console.log("Hello World");
// // 강형 타입, 약형 타입

// let year = "2022";
// let month = "07";
// let day = "15";

// let today = year + "." + month + "." + day;
// console.log(today);

// let date = `${year}-${month}-${day}`; // `(백틱)으로 변수 내장 문자열 사용 가능
// console.log(date);
// console.log(date.length);

// for (let i = 0; i < date.length; i++) {
//   console.log(date[i]);
// }
// ----------------------------------------------------------------------

// let str = "busan it academy";
// console.log(str.toUpperCase());

// let myEmail = "spaker38@naver.com";
// console.log(myEmail.indexOf("@"));
// let result = myEmail.indexOf("@");

// if (result < 0) {
//   // indexOf에서 찾는 값이 해당 문자열에 없으면 -1
//   console.log("사용할 수 없습니다.");
// } else {
//   console.log("사용할 수 있습니다.");
// }

// let yourEmail = "spaker38?naver.com";
// let result1 = yourEmail.replace("?", "");

const pi = 3.14;
let r = 10;
console.log(pi * r * r);
console.log(pi * r * r);

// 거듭제곱
console.log(pi * r ** 2);

// /, %
console.log(10 / 3);
console.log(10 % 3);

// 증감연산자 ++
let likes = 10;
likes = likes + 1;
console.log(likes);

console.log(++likes);

//html 화면에 출력 -> 변수를 사용할 때는 백틱(``)

let title = "Busan IT";
let content = "Busan Metropolitan...";
let html = `
  <h2>${title}</h2>
  <p>${content}</p>
`;
console.log(html);

let array = ["one", "two", "three", 100, false];
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

//배열이름.forEach(별명 => 출력)
array.forEach((arr, idx) => {
  console.log(arr);
  console.log(idx);
});

console.log(array.join(",")); // array 배열 사이에 값 넣음
// let arrResult = array.concat(["four", "five"]);
// console.log(arrResult); //concat() 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다.

array.push("four");
console.log(array);

array.pop();
console.log(array);

let board = "1번 게시물입니다.";
let res = board.includes("1");
console.log(res);

let arrays = ["java", "python", "react", "vue", "angular"];

if (arrays.includes("react")) console.log("react가 있습니다.");
else console.log("react가 없습니다.");

let num1 = 10;
let num2 = "10";

if (num1 === num2) console.log("값이 같습니다");
else console.log("값이 다릅니다");

console.log(Boolean(0));
