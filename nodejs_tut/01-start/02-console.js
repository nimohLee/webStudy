/* 1.console.log() */
console.log("Welcome NodeJs"); // browser -> res.send();
console.log("-----------------------------------------------");

/* 2. variable :
        let : 값을 재할당할 수 있다(변수)
        const : 값 재할당 X(상수) */
const number = 10;
console.log(number);
console.log("변수 값은 " + number);
console.log(`변수 값은 ${number}`);
console.log("변수 값은 %d", number);
console.log("변수 값은 %i", number);
console.log("-----------------------------------------------");

/* 3. function */
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(10, 20));

const calc = (num1, num2) => num1 + num2;
console.log(calc(50, 50));

const add = (num1, num2) => {
  return num1 + num2;
};
console.log(add(100, 200));
console.log("-----------------------------------------------");

/* 4. Object : JavaScript Object <-> JSON Object
        (1) JavaScript Object : 화면에 출력할 때 - key에 따옴표 X
        (2) JSON Object : 서버와 주고받을 때 - key에 따옴표 O (Stringify, parse) */
const jsObj = {
    id : 1,
    userid : "busanit",
    passwd : "12345",
    username : "Busan it Academy",
    gender : "M"
};

/* jsObj -> JsonObject : JSON.stringify(객체) */
const jsonResult = JSON.stringify(jsObj,null,2); // (target object, replacer ,space)
console.log(jsonResult);

/* JsonObj -> JSObj */
const jsResult = JSON.parse(jsonResult);
console.log(jsResult);

console.log(jsonResult);
console.log(jsObj.userid);
console.log(jsObj.passwd);