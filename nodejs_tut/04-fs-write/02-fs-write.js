/* 
1. Log file 은 보통 날짜이름으로 사용
    - 하루 한번 변경 : 년원일
    - 자주 기록되는 경우 : getTime(); 1/1000초 기록
*/
const fs = require('fs');
const path = require('path');

// new Date() : 년월일
// getFullYear(), getMonth(), getDay()

let yy = new Date().getFullYear();
let mm = new Date().getMonth() +1 ;
let dd = new Date().getDate();
let yymmdd = `${yy}-${mm}-${dd}`;
console.log(yymmdd);