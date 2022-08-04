"use strict";

// declare auth
const uName = document.getElementById("name");
const uID = document.getElementById("userid");
const validBtn = document.getElementById("btn");
const uPW = document.getElementById("passwd");
const uPW2 = document.getElementById("passwd2");
const email = document.getElementById("email");

// declare radio
const genders = document.querySelectorAll(".gender");

// declare select
const locations = document.frm.location;

// declare checkbox
const hobbies = document.querySelectorAll(".hobby");
const sports = document.getElementById("sports");
const inst = document.getElementById("inst");
const game = document.getElementById("game");

//declare self-introduce
const selfText = document.querySelector("textarea");

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

//hobbyIsChecked?
let leastChecked = 0;
let isSecond = false;

// 중복확인 버튼 클릭 시 팝업 function
function popupOpen(url, nick, width, height) {
  console.log("hi");
  let screen = "";
  let left = (screen.availWidth - width) / 2;
  let top = (screen.availHeight - height) / 2;
  screen =
    "left=" + left + ", top=" + top + ", width=" + width + ", height=" + height;
  window.open(url, nick, screen);
}

// 유효성 검사 function
function validateCheck() {
  /* -------- 회원가입 폼 제출 시 초기 validate 출력  -------*/
  // Name
  if (regExpName(uName.value.trim())) {
    nameOK = successCheck(uName);
  } else if (uName.value.length == "") {
    errorCheck(uName, "이름을 입력해주세요");
  } else {
    errorCheck(uName, "이름에는 한글이름만 입력할 수 있습니다");
  }

  // ID
  if (regExpID(uID.value.trim())) {
    idOK = successCheck(uID);
  } else if (regExpID(uID.value.trim())) {
    errorCheck(
      uID,
      "아이디는 영어 소문자, 영어 대문자, 숫자 조합만 가능합니다"
    );
  } else {
    errorCheck(uID, "아이디를 8자 이상 11자 미만으로 입력해주세요");
  }

  //PW
  if (uPW.value.trim().length > 11) {
    pwOK = successCheck(uPW);
  } else {
    errorCheck(uPW, "비밀번호는 12자 이상 입력해주세요");
  }

  //PW2
  if (uPW2.value.trim() == "" || uPW2.value.trim() === null) {
    errorCheck(uPW2, "비밀번호 확인을 입력해주세요");
  } else if (uPW.value.trim() == uPW2.value.trim()) {
    pw2OK = successCheck(uPW2);
  } else {
    errorCheck(uPW2, "비밀번호가 다릅니다");
  }

  /* 회원가입 폼 첫 제출 후 keyup에 따른 error or success 변화 */

  // Name
  uName.addEventListener("keyup", (e) => {
    if (regExpName(e.currentTarget.value)) {
      nameOK = successCheck(uName);
    } else if (e.currentTarget.value.length == "") {
      errorCheck(uName, "이름을 입력해주세요");
    } else {
      errorCheck(uName, "이름에는 글자만 입력할 수 있습니다");
    }
  });

  //ID
  uID.addEventListener("keyup", (e) => {
    if (regExpID(e.currentTarget.value)) {
      idOK = successCheck(uID);
    } else if (regExpID(e.currentTarget.value)) {
      errorCheck(
        uID,
        "아이디는 영어 소문자, 영어 대문자, 숫자 조합만 가능합니다"
      );
    } else {
      errorCheck(uID, "아이디를 8자 이상 입력해주세요");
    }
  });

  // PW
  uPW.addEventListener("keyup", (e) => {
    if (e.currentTarget.value.length > 11) {
      pwOK = successCheck(uPW);
    } else {
      errorCheck(uPW, "비밀번호는 12자리 이상 입력해주세요");
    }
  });

  // PW2
  uPW2.addEventListener("keyup", (e) => {
    const pw2Event = e.currentTarget.value;
    if (uPW.value.trim() == pw2Event.trim()) {
      pw2OK = successCheck(uPW2);
    } else if (pw2Event.trim() === null || pw2Event.trim() == "") {
      errorCheck(uPW2, "비밀번호 확인을 입력해주세요");
    } else {
      errorCheck(uPW2, "비밀번호가 다릅니다");
    }
  });

  if (email.value === null || email.value == "") {
    errorCheck(email, "이메일을 입력해주세요");
  } else if (!isEmail(email.value.trim())) {
    errorCheck(email, "올바른 이메일 형식이 아닙니다.");
  } else {
    emailOK = successCheck(email);
  }

  //email validation
  email.addEventListener("keyup", (e) => {
    //currentTarger : 현재 이벤트 발생하는 target
    const val = e.currentTarget.value;
    //@ 체크
    //@ 뒤에 .있으면 true 없으면 false
    if (e.currentTarget.value === null || e.currentTarget.value == "") {
      errorCheck(email, "이메일을 입력해주세요");
    } else if (!isEmail(val)) {
      errorCheck(email, "올바른 이메일 형식이 아닙니다.");
    } else {
      emailOK = successCheck(email);
    }
  });

  //gender validation

  genders.forEach((gender) => {
    if (gender.checked) {
      genderOK = true;
    }
    gender.addEventListener("change", () => {
      genderOK = successCheck(document.querySelector(".gender-wrap"));
    });
  });

  if (!genderOK) {
    errorCheck(document.querySelector(".gender-wrap"), "성별을 선택해주세요");
  }

  // location validation

  if (locations.options[locations.selectedIndex].value == "") {
    errorCheck(locations, "지역을 선택해주세요");
  }
  locations.addEventListener("change", (e) => {
    if (e.currentTarget.value != "") {
      locationOK = successCheck(locations);
    } else {
      errorCheck(locations, "지역을 선택해주세요");
    }
  });

  // hobby validation
  let firstCheck = 0;
  hobbies.forEach((hobby) => {
    if (hobby.checked) {
      firstCheck++;
    }
  });
  if (firstCheck == 0) {
    errorCheck(
      document.querySelector(".hobby-wrap"),
      "취미를 하나 이상 선택해주세요"
    );

  }

  hobbies.forEach((hobby) => {
    hobby.addEventListener("change", () => {
      if (hobby.checked) {
        leastChecked++;
      } else {
        if (leastChecked != 0)
          leastChecked--;

      }


      if (leastChecked == 0)
        errorCheck(
          document.querySelector(".hobby-wrap"),
          "취미를 하나 이상 선택해주세요"
        );
      else hobbyOK = successCheck(document.querySelector(".hobby-wrap"));
    });
  });
  leastChecked = 0;





  hobbies.addEventListener('change', () => {

  })

  //self-introduce validation
  const selfValue = selfText.value.trim();
  if (selfValue === null || selfValue === "" || selfValue.length < 10) {
    errorCheck(selfText, "자기소개를 10자 이상 입력해주세요");
  }
  selfText.addEventListener("keyup", (e) => {
    if (e.currentTarget.value.length > 10) {
      selfOK = successCheck(selfText);
    } else {
      errorCheck(selfText, "자기소개를 10자 이상 입력해주세요");
      selfOK = false;
    }
  });
}

// Email 정규표현식 함수
function isEmail(value) {
  // 없으면 -1, 있으면 0 ~

  //value.split 공부하기

  return value.indexOf("@") > 1 && value.split("@")[1].indexOf(".") > 1;
}

// Name 정규표현식 함수 (영어 소문자, 대문자, 한글 (가~힣))
function regExpName(input) {
  let exp = /^[가-힣]{2,4}$/;

  return exp.test(input);
}

// ID 정규표현식 함수 (영어 소문자, 숫자 0~9 8자부터 11자)
function regExpID(input) {
  let exp = /([a-z0-9]){8,11}/;

  return exp.test(input);
}

// input border tomato로 설정
function errorCheck(input, msg) {
  let formControl = input.parentElement;
  let small = formControl.querySelector("small");

  formControl.className = "form-control error";
  small.innerHTML = msg;
}

function successCheck(input) {
  let formControl = input.parentElement;

  formControl.className = "form-control success";
  return true;
}

document.getElementById("frm").addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    nameOK &&
    idOK &&
    pwOK &&
    pw2OK &&
    emailOK &&
    genderOK &&
    locationOK &&
    hobbyOK &&
    selfOK
  ) {
    location.href = "./login.html";
  } else validateCheck();
});

// 페이지 로딩 천천히
document.addEventListener("DOMContentLoaded", () => {
  window.setTimeout(() => {
    document.body.classList.remove("fade");
  });
});