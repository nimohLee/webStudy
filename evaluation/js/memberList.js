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

const sel = document.querySelector("#select");
const text = document.querySelector("#search");
const btn = document.querySelector("#search-btn");

let isFirstLoop = true;

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

btn.addEventListener("click", search);
