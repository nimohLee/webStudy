//동작() -> 메소드

//이벤트 처리 -> 메소드와 버튼을 연결

//   function showBox1() {
//     // alert("OK");
//     console.log("OK");
//   }

//   function closeBox1() {
//     // document.getElementById("box1").classList.add("onOff");
//     document.querySelector("#box1").classList.add("onOff");
//   }

const closeBox1 = () => {
  document.querySelector("#box1").classList.add("onOff");
};

document.getElementById("box1Open").addEventListener("click", () => {
  document.querySelector("#box1").classList.add("onOff");
});

let boxTwo = document.getElementById("box2");
let boxTwoBtn = document.getElementById("box2Toggle");

const togglef = () => {
  console.log("hi");
  boxTwo.classList.toggle("onOff");
};

boxTwoBtn.addEventListener("click", togglef);
