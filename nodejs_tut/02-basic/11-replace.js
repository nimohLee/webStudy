//str.replace(정규식, "바꿀단어");
const str = "This is NodeJS"; // NodeJS => ReactJS 글자 바꾸기
const regExp = /NodeJS/gi; // 정규식/  gi는 문장전체(g) 대소문자 구분 없이(i)

/* replace(찾을문자, 바꿀문자) */
const result = str.replace(regExp, "ReactJS"); // replace된 결과
console.log(result);

const str01 = "2022-09-15"; // 여기서 년월일 사이에 - 없애보고 && / 넣을거야

/* str01에서 -를 찾는 정규식 
    /-/뒤에 g(문장전체)를 넣어줘야 -가 다 잡힘
    아니면 제일 첫번째 -만 잡힘 */
const regEx02 = /-/g;

/* str01에서 regEx02(-)를 찾아서 공백("")으로 바꿔 */
const result02 = str01.replace(regEx02,"");

/* str01에서 regEx02(-)를 찾아서 /로 바꿔 */
const result03 = str01.replace(regEx02,"/");

console.log(result02);
console.log(result03);

/* 숫자 빼주기 */
const str02 = "This9is1Javascript";
/* 문장전체에서 0부터 9까지 찾아!*/
const regEx03 = /[0-9]/g;
/* 찾은 걸 " "으로 바꿔! */
const result04 = str02.replace(regEx03," ");
/* 콘솔에 출력해! */
console.log(result04);

/* 여러 개 찾기 정규식 : /검색어1|검색어2|검색어3/gi */
/* 바꾼 후 대문자로 변경 : toUpperCase() */
const str03 = "red house and green house and blue house";
const regEx04 = /red|green|blue/gi; // 문장전체(g), 대소문자 상관 x(i)
const result05 = str03.replace(regEx04,"colors").toUpperCase();
console.log(result05);