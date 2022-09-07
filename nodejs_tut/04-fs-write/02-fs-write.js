/* 
1. Log file 은 보통 날짜이름으로 사용
    - 하루 한번 변경 : 년원일
    - 자주 기록되는 경우 : getTime(); 1/1000초 기록
*/
const fs = require('fs');
const path = require('path');

// new Date() : 년월일
// getFullYear(), getMonth(), getDay()

/* 폴더 생성 */
let yy = new Date().getFullYear();
let mm = new Date().getMonth() +1 ;
if(mm<10){
    mm = "0"+mm;
}
let dd = new Date().getDate();
if(dd<10){
    dd = "0"+dd;
}
let yymmdd = `${yy}-${mm}-${dd}`;
console.log(yymmdd);

fs.mkdir(yymmdd,(err)=>{
    if(err) throw err;
    console.log('로그폴더 생성');
})

/* 파일 생성 : 시간 */
function UNIX_TIMESTAMP(){
    return new Date().getTime();
}
console.log(UNIX_TIMESTAMP());