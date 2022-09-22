const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const minute = date.getMinutes()
    let minutes = minute<10 ? `0${minute}` : minute;
    console.log(`${date.getHours()}:${date.getMinutes()}:${}`}`);

}

// setInterval(sayHello,1000); // 지정 시간마다 계속 실행
// setTimeout(sayHello,5000);
getClock();
setInterval(getClock, 1000);