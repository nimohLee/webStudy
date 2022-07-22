gsap.registerPlugin(ScrollTrigger); //gsap plugin 등록(ScrollTrigger)

// gsap.to(".square", { // square이 대상
//   rotation: 30, // 30만큼 회전
//   x: 100, // x축으로 100만큼
//   duration: 1, // 움직이는 시간
//   scrollTrigger: ".square2", // square2까지 스크롤 내려오면 반응
// });


if(window.matchMedia("(min-width: 768px)").matches){
    gsap.to(".intro-text",{
        scrollTrigger:{
            trigger:".intro-text",
            toggleActions: "play reverse play",
        
            end:"top center",
            // scrub : true,
        },
        xPercent:140,
        pin:true,
        duration:1.5
    })
}


// gsap.to(".box1", {
//   scrollTrigger: {
//     trigger: ".box1",
//     toggleActions: "play pause reverse reset",
//     //toggleActions: "onEnter onLeave onEnterBack onLeaveBack"
//     // play pause resume reverse restart reset complete
    
//     markers: true,
//     // start: "top center",
//     pin: true,
//     scrub: true, // 돌아왔을 때 애니메이션 되감기
//   },

//   x:200,
//   duration:2,
// }

// );

/* 타임라인 */

// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".t1",
//     start: "top center",
//     end: "top 100px",
//     scrub: 3,
//     markers: true,
//     pin:true
    
//   },
//   start:"bottom center",
  
// });


// tl.to(".t1", {
//   x:20,
//   duration:3,  
//   pinSpacing: false
  
// })
//   .to(".t2", {backgroundColor: "purple",
//     duration: 5,
//   });

