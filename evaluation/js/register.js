'use strict';

console.log('hi');

// declare auth
const uName = document.getElementById('name');
const uID = document.getElementById('userid');
const validBtn = document.getElementById('btn');
const uPW = document.getElementById('passwd');
const uPW2 = document.getElementById('passwd2');
const email = document.getElementById('email');

// declare radio
const genders = document.querySelectorAll('.gender');

// declare select
const locations = document.frm.location;

// declare checkbox
const hobbies = document.querySelectorAll('.hobby');
const sports = document.getElementById('sports');
const inst = document.getElementById('inst');
const game = document.getElementById('game');

//declare self-introduce
const selfText = document.querySelector('textarea');

// declare isInput(boolean)
let nameOK = false;
let idOK = false;
let pwOK = false;
let pw2OK = false;
let emailOK = false;
let genderOK = false;
let hobbyOK = false;
let selfOK = false;
let locationOK = false;
// 중복확인 버튼 클릭 시 팝업 function
function popupOpen(url, nick, width, height) {
    let screen = "";
    let left = (screen.availWidth - width) / 2;
    let top = (screen.availHeight - height) / 2;
    screen = "left=" + left + ", top=" + top + ", width=" + width + ", height=" + height;
    window.open(url, nick, screen);
}





uName.addEventListener('keyup', (e) => {
    if (regExpName(e.currentTarget.value)) {
        successCheck(uName);
        nameOK = true;
    } else if (e.currentTarget.value.length == "") {
        errorCheck(uName, '이름을 입력해주세요');
    } else {
        errorCheck(uName, '이름에는 글자만 입력할 수 있습니다');
    };
})

uID.addEventListener('keyup', (e) => {
    if (regExpID(e.currentTarget.value)) {
        successCheck(uID);
        idOK = true;
    } else if (regExpID(e.currentTarget.value)) {
        errorCheck(uID, '아이디는 영어 소문자, 영어 대문자, 숫자 조합만 가능합니다');
    } else {
        errorCheck(uID, "아이디를 6자 이상 10자 미만으로 입력해주세요");
    };
})

uPW.addEventListener('keyup', (e) => {
    if (e.currentTarget.value.length > 5 && e.currentTarget.value.length < 11) {
        pwOK = successCheck(uPW);
    } else {
        errorCheck(UPW, "비밀번호는 6자 이상 10자 이하로 입력해주세요");
    }

})

uPW2.addEventListener('keyup', (e) => {
    const pw2Event = e.currentTarget.value;
    if (pw2Event.length > 5 && pw2Event.length < 11 && uPW.value == pw2Event) {
        successCheck(uPW2);
    }

})



//gender validation

genders.forEach((gender) => {
    if (gender.checked) {
        genderOK = true;
    }
    gender.addEventListener('change', () => {
        successCheck(document.querySelector('.gender'));
    })
})

if (!genderOK) {
    errorCheck(document.querySelector('.gender'), '성별을 선택해주세요');
}



// location validation

if (locations.options[locations.selectedIndex].value == "") {
    errorCheck(locations, '지역을 선택해주세요');
}
locations.addEventListener('change', (e) => {
    if (e.currentTarget.value != "") {
        successCheck(locations);
        locationOK = true;
    } else {
        errorCheck(locations, '지역을 선택해주세요');
    }
})


// hobby validation
hobbies.forEach((hobby) => {
    if (hobby.checked) {
        hobbyOK = true;
    }
    hobby.addEventListener('change', () => {
        successCheck(document.querySelector('.hobby-wrap'));
    })
})

if (!hobbyOK) {
    errorCheck(document.querySelector('.hobby-wrap'), '취미를 하나 이상 선택해주세요');
}

//self-introduce validation
const selfValue = selfText.value.trim();
if (selfValue === null || selfValue === "" || selfValue.length < 10) {
    errorCheck(selfText, "자기소개를 10자 이상 입력해주세요");
}
selfText.addEventListener('keyup', (e) => {

    if (e.currentTarget.value.length > 10) {
        selfOK = successCheck(selfText);
    } else {
        errorCheck(selfText, "자기소개를 10자 이상 입력해주세요");
        selfOK = false;
    }

})


// 유효성 검사 function
function validateCheck() {
    const uNameValue = uName.value.trim();
    const uIDValue = uID.value.trim();
    const uPWValue = uPW.value.trim();
    const uPW2Value = uPW2.value.trim();
    const emailValue = email.value.trim();

    // name validation
    if (uNameValue === null || uNameValue == "") {
        errorCheck(uName, "이름을 입력해주세요");
    } else if (!regExpName(uNameValue)) {
        errorCheck(uName, "이름을 확인해주세요");
    } else {
        nameOK = successCheck(uName);
    }




    // id validation
    if (uIDValue === null || uIDValue == "") {
        errorCheck(uID, "아이디를 입력해주세요");
    } else if (uIDValue.length < 6 || uIDValue.length > 10) {
        errorCheck(uID, "아이디를 6자 이상 10자 미만으로 입력해주세요");
    } else if (!regExpID(uIDValue)) {
        errorCheck(uID, "아이디는 영어 소문자, 영어 대문자, 숫자 조합만 가능합니다");
    } else {
        idOK = successCheck(uID);
    }




    // pw validation
    if (uPWValue === null || uPWValue == "") {
        errorCheck(uPW, "비밀번호를 입력해주세요");
    } else if (uPWValue.length < 6 || uPWValue.length > 11) {
        errorCheck(uPW, "비밀번호를 6자 이상 11자 미만으로 입력해주세요");
    } else if (!regExpID(uPWValue)) {
        errorCheck(uPW, "비밀번호는 영어 소문자, 숫자 조합만 가능합니다")
    } else {
        pwOK = successCheck(uPW);
    }


    // pw2 validation
    if (uPW2Value === null || uPW2Value == "") {
        errorCheck(uPW2, "비밀번호 확인을 입력해주세요");
    } else if (uPW2Value !== uPWValue) {
        errorCheck(uPW2, "비밀번호가 다릅니다");
    } else {
        pw2OK = successCheck(uPW2);
    }


}

//email validation

function isEmail(value) {
    // 없으면 -1, 있으면 0 ~

    //value.split 공부하기

    return (value.indexOf('@')) > 1 && (value.split('@')[1].indexOf('.') > 1);
}

if (email.value === null || email.value == "") {
    errorCheck(email, '이메일을 입력해주세요')
} else if (!isEmail(val)) {
    errorCheck(email, '올바른 이메일 형식이 아닙니다.')
} else {
    emailOK = successCheck(email);

}

email.addEventListener("keyup", (e) => {
    //currentTarger : 현재 이벤트 발생하는 target
    const val = e.currentTarget.value;
    //@ 체크
    //@ 뒤에 .있으면 true 없으면 false
    if (e.currentTarget.value === null || e.currentTarget.value == "") {
        errorCheck(email, '이메일을 입력해주세요')
    } else if (!isEmail(val)) {
        errorCheck(email, '올바른 이메일 형식이 아닙니다.')
    } else {
        emailOK = successCheck(email);

    }

})





// if (emailValue === null || emailValue == "") {

//     errorCheck(email, "이메일을 입력해주세요");
// } else {
//     emailOk = successCheck(email);
// }

// //gender validation
// if (emailValue === null || emailValue == "") {
//     errorCheck(email, "이메일을 입력해주세요");
// } else {
//     emailOk = successCheck(email);
// }
// //location validation
// if (emailValue === null || emailValue == "") {
//     errorCheck(email, "이메일을 입력해주세요");
// } else {
//     emailOk = successCheck(email);
// }
// //hobby validation
// if (emailValue === null || emailValue == "") {
//     errorCheck(email, "이메일을 입력해주세요");
// } else {
//     emailOk = successCheck(email);
// }




// if (nameOk == true && idOk == true && pwOk == true && pw2Ok == true) {
//     location.href = "./main.html";
// }




function regExpName(input) {
    let exp = /[a-zA-Z가-힣]/;

    return exp.test(input);
}

function regExpID(input) {
    let exp = /([a-z0-9]){6,10}/;

    return exp.test(input);
}


function errorCheck(input, msg) {

    let formContol = input.parentElement;
    let small = formContol.querySelector('small');
    formContol.className = "form-control error"
    small.innerHTML = msg;
}

function successCheck(input) {
    let formControl = input.parentElement;
    formControl.className = "form-control success"
    return true;
}


// function radioValidate() {
//     let isChecked = ""; //true, false
//     let gender = document.frm.gender;

//     for (let i = 0; i < document.getElementsByName("gender").length; i++) {
//         if (document.frm.gender[i].checked) {
//             isChecked = document.frm.gender[i].value;
//         }
//     }

//     if (isChecked == "") {
//         alert('성별을 선택하세요');
//         return false;
//     } else {

//         // alert(`${gender[isChecked].label.value}이 선택 되었습니다`);
//         return true;
//     }
// }

// function selectValidate() {
//     if (document.getElementById('sel').value === "") {
//         alert('검색 타입을 선택해주세요');

//         return false;
//     }


//     if (document.getElementById("search").value.trim() === '') {
//         alert('검색어를 입력해 주세요');
//         document.getElementById('search').focus();

//         return false;
//     }

//     return true;

// }


// function checkboxValidate() {
//     if (!document.getElementById("agree").checked) {
//         alert("동의하셔야 회원가입이 가능합니다.");
//         return false;
//     } else {
//         alert("약관에 동의하셨습니다.\n회원가입을 진행합니다.");
//         location.href = "https://nid.naver.com/user2/V2Join?m=agree&lang=ko_KR&cpno=";
//     }
// }





document.getElementById('frm').addEventListener('submit', (e) => {
    e.preventDefault();
    validateCheck();
    // selectValidate();
    // checkboxValidate();
    // radioValidate();
})