gsap.registerPlugin(ScrollTrigger); //gsap plugin 등록(ScrollTrigger)

if (window.matchMedia("(min-width: 768px)").matches) {
    gsap.to(".intro-text", {
        scrollTrigger: {
            trigger: ".intro-text",
            toggleActions: "play reverse play",

            end: "top center",
            // scrub : true,
        },
        xPercent: 140,
        pin: true,
        duration: 1.5,
    });
}

const img = document.querySelector(".bg");
const m = window.matchMedia("screen and (max-width: 768px)");
const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().bottom; // getBoundigClientRect() -
         elementVisible = 0;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
            img.classList.add("opacity");
        } else {
            reveals[i].classList.remove("active");
            img.classList.remove("opacity");
        }
    }
};

if (!m.matches) window.addEventListener("scroll", reveal);

const mapOptions = {
    center: new naver.maps.LatLng(35.14846063861386, 129.11349699731272),
    zoom: 20,
};
const map = new naver.maps.Map("map", {
    center: new naver.maps.LatLng(35.14846063861386, 129.11349699731272),
    zoom: 20,
});

const dateClass = new Date();
const year = dateClass.getFullYear();
const month =
    dateClass.getMonth() < 10
        ? `0${dateClass.getMonth() + 1}`
        : dateClass.getMonth() + 1;
const date =
    dateClass.getDate() < 10
        ? `0${dateClass.getDate() + 1}`
        : dateClass.getDate() + 1;

document.getElementById("start").min = new Date()
    .toISOString()
    .substring(0, 10);
document.getElementById("end").min = `${year}-${month}-${date}`;

function toReservation() {
    const startDate = document.querySelector("#start");
    const endDate = document.querySelector("#end");

    if (startDate.value == "" || endDate.value == "") {
        alert("체크인-체크아웃 날짜를 입력해주세요");
        return false;
    } else {
        location.href = "./reservation.html";
    }
}

document.querySelector("#frm").addEventListener("submit", (e) => {
    e.preventDefault();
    toReservation();
});

const loginBtn = document.querySelector(".login-menu-btn");
const loginMenu = document.querySelector(".login-menu");

const add = () => {
    loginMenu.classList.add("blocked");
};
const remove = () => {
    loginMenu.classList.remove("blocked");
};

loginBtn.addEventListener("mouseover", add);
loginBtn.addEventListener("mouseout", remove);

const button = document.getElementById("go-reservation");
const section = document.getElementById("reservation-section");

button.addEventListener("click", () => {
    section.scrollIntoView({
        behavior: "smooth",
    });
});
