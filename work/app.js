gsap.registerPlugin(ScrollTrigger); //gsap plugin 등록(ScrollTrigger)

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".square",
    start: "top center",
    end: "top 100px",
    scrub: 3,
    markers: true,
  },
});

// gsap.to(".square", { // square이 대상
//   rotation: 30, // 30만큼 회전
//   x: 100, // x축으로 100만큼
//   duration: 1, // 움직이는 시간
//   scrollTrigger: ".square2", // square2까지 스크롤 내려오면 반응
// });

// gsap.to(".square", {
//   scrollTrigger: {
//     trigger: ".square",
//     // toggleActions: "play pause reverse reset",
//     //toggleActions: "onEnter onLeave onEnterBack onLeaveBack"
//     // play pause resume reverse restart reset complete
//     markers: true,
//     start: "top center",
//     pin: true,
//     scrub: true, // 돌아왔을 때 애니메이션 되감기
//   },

//   x: 400,
//   duration: 4,
// });

/* 타임라인 */
// tl.to(".square", {
//   x: 400,
//   rotation: 360,
//   ease: "none",
//   duration: 10,
// })
//   .to(".square", {
//     backgroundColor: "purple",
//     duration: 5,
//   })
//   .to(".square", {
//     x: 0,
//     duration: 5,
//   });
