 'use strict'
 
 /* 
    module -> 객체, interface

    메인은 일반적으로 기본적인 코드만 두고 실행

    Controller : 주소 관리
    Model : 자료 저장
    Service : 예외처리
    View : 화면구성

    MVC 모델
 */

const user = require('./users');
const {person,color}= require('./users');

console.log(user.person);
console.log(user.color);
console.log(user.homin[1].name);
console.log(user.homin);
