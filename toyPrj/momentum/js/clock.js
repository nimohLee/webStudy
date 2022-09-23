const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const clock = document.querySelector('#clock');
    const hours = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    const seconds = String(date.getSeconds()).padStart(2,'0');
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setInterval(sayHello,1000); // 지정 시간마다 계속 실행
// setTimeout(sayHello,5000);
getClock();
setInterval(getClock, 1000);