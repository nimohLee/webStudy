'use strict';
const uID = document.querySelector('#id');
const uPW = document.querySelector('#pw');
let idOK = false;
let pwOK = false;

function validateLogin() {
    // ID
    idValidate();

    uID.addEventListener('keyup', () => {
        idValidate();
    })

    if (idOK)
        location.href = './memberList.html';

}


function idValidate() {
    if (regExpID(uID.value.trim())) {
        idOK = successCheck(uID);
    } else if (regExpID(uID.value.trim())) {
        errorCheck(uID, '아이디는 영어 소문자, 영어 대문자, 숫자 조합만 가능합니다');
    } else {
        errorCheck(uID, "아이디를 8자 이상 11자 미만으로 입력해주세요");
    };
}

// ID 정규표현식 함수 (영어 소문자, 숫자 0~9 8자부터 11자)
function regExpID(input) {
    let exp = /([a-z0-9]){8,11}/;

    return exp.test(input);
}

// input border tomato로 설정
function errorCheck(input, msg) {

    let formControl = input.parentElement;
    let small = formControl.querySelector('small');

    formControl.className = "form-control error"
    small.innerHTML = msg;
}

function successCheck(input) {
    let formControl = input.parentElement;

    formControl.className = "form-control success"
    return true;
}

// document.getElementById('frm').addEventListener('submit', (e) => {
//     e.preventDefault();
//     if (nameOK && idOK && pwOK && pw2OK && emailOK && genderOK && locationOK && hobbyOK && selfOK) {
//         location.href = './login.html';
//     } else
//         validateCheck();
// })