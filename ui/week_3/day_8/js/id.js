let idBtn = document.getElementById("idBtn");
let uID = document.getElementById("userId");
let domText = document.getElementById("text");

const chkID = () => {
  //   //   alert("ok");
  //   alert(uID.value); // 해당 값 출력
  if (uID.value == "busanit12345") {
    alert("로그인되었습니다");
    location.href = "https://www.naver.com";
  } else if (uID.value == "") {
    domText.innerHTML = "<b>아이디를 입력해주세요</b>";
  } else {
    // alert("아이디를 확인하세요.");
    domText.innerHTML = "<b>아이디를 확인하세요</b>";
    uID.value = "";
    uID.focus();
  }
};

idBtn.addEventListener("click", chkID);
