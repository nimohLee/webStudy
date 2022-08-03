"use strict";

// Table값 객체로 모두 가져오기
const nos = document.querySelectorAll("#no");
let names = document.querySelectorAll("#name");
const ids = document.querySelectorAll("#id");
const emails = document.querySelectorAll("#email");
const genders = document.querySelectorAll("#gender");
const locates = document.querySelectorAll("#location");
const hobbies = document.querySelectorAll("#hobby");
const table = document.querySelector("#table");
const reBtn = document.querySelector("#refresh");
const sel = document.querySelector("#select");
const text = document.querySelector("#search");
const btn = document.querySelector("#search-btn");

// 5개씩 끊어진 tr값을 배열로 만들어 호출 및 선언
const pages = [];

for (let i = 0; i < 5; i++) {
  pages[i] = document.querySelectorAll(`.tr${i + 1}`);
}

const pBtn1 = document.querySelector(".btn1");
const pBtn2 = document.querySelector(".btn2");
const pBtn3 = document.querySelector(".btn3");
const pBtn4 = document.querySelector(".btn4");
const pBtn5 = document.querySelector(".btn5");

//페이징버튼 클릭 시 tr 5개씩 끊어져있는 테이블을 show & hide하며 페이지 이동하는 것 처럼 보이게 하는 function
function makeHide(input, a) {
  input.forEach((page) => {
    page.className = `tr${a + 1} show`;
  });

  for (let i = 0; i < 5; i++) {
    if (i != a) {
      pages[i].forEach((page) => {
        page.className = `tr${i + 1} hide`;
      });
    }
  }
}

//페이징버튼 클릭리스너
pBtn1.addEventListener("click", () => {
  makeHide(pages[0], 0);
});

pBtn2.addEventListener("click", () => {
  makeHide(pages[1], 1);
});

pBtn3.addEventListener("click", () => {
  makeHide(pages[2], 2);
});
pBtn4.addEventListener("click", () => {
  makeHide(pages[3], 3);
});
pBtn5.addEventListener("click", () => {
  makeHide(pages[4], 4);
});

let isFirstLoop = true;

// 해당 element의 부모요소를 찾아 해당 tr을 모두 출력(innerHTML), 원래 HTML을 삭제하고 찾아온 값을 append로 넣어 줌(중복값을 넣어주기 위해)
function searchLoop(input) {
  const tr = input.parentElement;
  const tds = tr.querySelectorAll("td");
  const para = document.createElement("tr");
  para.innerHTML = `<td>${tds[0].textContent}</td><td>${tds[1].textContent}</td><td>${tds[2].textContent}</td><td>${tds[3].textContent}</td><td>${tds[4].textContent}</td><td>${tds[5].textContent}</td><td>${tds[6].textContent}</td>`;
  if (input.textContent == text.value) {
    if (isFirstLoop) {
      table.innerHTML = "";
      table.appendChild(para);
      isFirstLoop = false;
    } else table.appendChild(para);
  }
}

// 검색버튼 클릭 시 switch-case문을 통해 select 값에 따라 검색
function search() {
  switch (sel.value) {
    case "sel-name":
      names.forEach((name) => {
        searchLoop(name);
      });
      isFirstLoop = true;
      break;
    case "sel-num":
      nos.forEach((no) => {
        searchLoop(no);
      });
      isFirstLoop = true;
      break;
    case "sel-id":
      ids.forEach((id) => {
        searchLoop(id);
      });
      isFirstLoop = true;
      break;
    case "sel-email":
      emails.forEach((email) => {
        searchLoop(email);
      });
      isFirstLoop = true;
      break;
  }
}

// Refresh 버튼 클릭 시 페이지 리로드
reBtn.addEventListener("click", () => {
  location.reload();
});

// 검색(search)버튼 클릭이벤틑
btn.addEventListener("click", search);
