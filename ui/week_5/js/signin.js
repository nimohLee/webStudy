'use strict';

let email = document.getElementById("email");
let passwd = document.getElementById("passwd");
let passwd2 = document.getElementById("passwd2");


function checkInputs() {
    if (email.value.trim() === null || email.value.trim() === '') {
        const formControl = email.parentElement;
        const small = formControl.querySelector("small");
        formControl.className = "form-control error";
        small.innerHTML = " 이메일을 입력해주세요 ";
    } else if (!isEmailCheck(email.value.trim())) {
        const formControl = email.parentElement;
        const small = formControl.querySelector("small");
        formControl.className = "form-control error";
        small.innerHTML = " 유효하지 않은 이메일입니다. ";
    } else {
        const formControl = email.parentElement;
        const small = formControl.querySelector("small");
        formControl.className = "form-control success";
    }




    //RegExp(Regular Expression) : 정규식
    //시작과 끝은 : /정규식/
    //return : ture, false
    // isEmailCheck() -> boolean

    function isEmailCheck(email) {
        let exp = /[a-zA-Z0-9+-\_.]+@[a-zA-Z]+\.[a-zA-z]+$/;

        return exp.test(email);

    }



}


document.getElementById("form").addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});