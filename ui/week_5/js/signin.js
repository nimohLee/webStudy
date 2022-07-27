'use strict';

let email = document.getElementById("email");
let passwd = document.getElementById("passwd");
let passwd2 = document.getElementById("passwd2");

function checkInputs() {
    let emailValue = email.value.trim(); // trim()은 좌우 공백 제거해주는 함수
    let passwdValue = passwd.value.trim();
    let passwd2Value = passwd2.value.trim();

    if (emailValue === null || emailValue === '') {
        errorCheck(email, '이메일을 입력해주세요');
    } else if (!isEmailCheck(emailValue)) {
        errorCheck(email, '유효하지 않은 이메일입니다');
    } else {
        successCheck(email);
    }

    if (passwdValue === null || passwdValue === '') {
        errorCheck(passwd, '비밀번호를 입력해주세요');
    } else if (passwdValue.length < 8) {
        errorCheck(passwd, '비밀번호는 8자리 이상이어야합니다');
    } else {
        successCheck(passwd);
    }


    if (passwd2Value === null || passwd2Value === '') {
        errorCheck(passwd2, '비밀번호 확인을 입력해주세요');
    } else if (passwdValue !== passwdValue) {
        errorCheck(passwd2, '비밀번호가 일치하지 않습니다');
    } else {
        successCheck(passwd2);
    }


}


//RegExp(Regular Expression) : 정규식
//시작과 끝은 : /정규식/
//return : ture, false
// isEmailCheck() -> boolean
function isEmailCheck(email) {
    let exp = /[a-zA-Z0-9+-\_.]+@[a-zA-Z]+\.[a-zA-z]+$/;
    return exp.test(email);

}

function errorCheck(input, msg) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerHTML = msg;
}

function successCheck(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}


document.getElementById("form").addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});