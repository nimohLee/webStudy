/*
    new Date() : 현재 날짜 및 시간 가져오기

    
/*         ****Date에서****
    getFullYear() : 년 가져오기
    getMonth() + 1 : 월 가져오기 --> Month는 0부터 11까지로 나와서 1 더해줘야함
    getDate() : 일 가져오기
    getDay() : 요일 가져오기
*/
const today = new Date();
console.log(today);
const yy = today.getFullYear();
let mm = today.getMonth() + 1; // const(Constant : 불변의)로 변수만들면 사실상 변수(mutable)가 아니라 상수(immutable)임. 변경 불가. 밑에서 mm을 변경해줘야하므로 let으로 선언
if( mm < 10){
    mm = "0"+mm; // mm을 변경해줘야하므로 mm은 const로 만들면 안됨
}

/* 강사님이 mm을 const로 만들어서 에러나가지고 밑에처럼 바꾸심 */
function getYymmdd(today){
    const yy = today.getFullYear();
    const mm = today.getMonth() < 9 ? `0${today.getMonth()+1}` : today.getMonth()+1;
    const dd = today.getDate();

    return `${yy}/${mm}/${dd}`;
}


const dd = today.getDate();
console.log(`오늘 날짜 : ${getYymmdd(new Date())}`); 

/* getTime() : 날짜를 초로 변환해서 사용할 때 - Log file, attachment(첨부파일) 같은 거 이름 중복 절대 안되게 위해서 사용
진짜 로그파일이나 첨부파일 찍는 게 아니라 getTime()이 이렇다는 거 그냥 보여주는 거인듯*/
const log_name = "Log";
const attach_name = "image";
//console.log(new Date().getTime());

console.log(`Log file을 생성합니다 : ${log_name}_${new Date().getTime()}.txt`);

// .jpg .jpge : 사진 배경이 흰색
// .png 뒷 배경이 투명사진이나 이미지

console.log("업로드 된 첨부파일 : " + log_name + "_" + new Date().getTime() +"_원본이름"+".jpg");