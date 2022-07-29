'use strict';

// declare auth
const name = document.getElementById('name');
const userid = document.getElementById('userid');
const passwd = document.getElementById('passwd');
const passwd2 = document.getElementById('passwd2');

// declare radio
const gender = document.frm.gender;

// declare select
const locations = document.frm.locations;

// declare checkbox
const sports = document.getElementById('sports');
const inst = document.getElementById('inst');
const game = document.getElementById('game');


function radioValidate() {
    let isChecked = ""; //true, false
    let gender = document.frm.gender;

    for (let i = 0; i < document.getElementsByName("gender").length; i++) {
        if (document.frm.gender[i].checked) {
            isChecked = document.frm.gender[i].value;
            alert(`${gender[i].alt}가 선택되었습니다.`);
        }
    }

    if (isChecked == "") {
        alert('성별을 선택하세요');
        return false;
    } else {

        // alert(`${gender[isChecked].label.value}이 선택 되었습니다`);
        return true;
    }
}

function selectValidate() {
    if (document.getElementById('sel').value === "") {
        alert('검색 타입을 선택해주세요');

        return false;
    }


    if (document.getElementById("search").value.trim() === '') {
        alert('검색어를 입력해 주세요');
        document.getElementById('search').focus();

        return false;
    }

    return true;

}


function checkboxValidate() {
    if (!document.getElementById("agree").checked) {
        alert("동의하셔야 회원가입이 가능합니다.");
        return false;
    } else {
        alert("약관에 동의하셨습니다.\n회원가입을 진행합니다.");
        location.href = "https://nid.naver.com/user2/V2Join?m=agree&lang=ko_KR&cpno=";
    }
}








document.getElementById('frm').addEventListener('submit', (e) => {
    e.preventDefault();
    checkboxValidate();
})



document.getElementById("frm").addEventListener("submit", (e) => {
    // 이벤트 발생 막기
    e.preventDefault;
    radioValidate();
});