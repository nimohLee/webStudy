/* 문자열.split('나누는 기준')
    -> 기준을 두고 배열로 바뀜 */

const email = 'aaa@email.com'
const arr = email.split('@');
console.log(arr[0]);
console.log(arr[1]);

//for(let 별명 of 객체){}
for(let ar of arr){
    console.log(`Email : ${ar}`);
}

const str01 = "This is NodeJS and ReactJS"; // space를 기준으로 나누기
/* 문자열.split('기준',출력개수) */
const arr01 = str01.split(' ',3);
console.log(arr01);

/* 다중 split 
    str.split(정규식) =>?, ! 기준으로 나누는 split() */
const str02 = "Hello? Hi! Thank you";
const result03 = str02.split(/[!,?]/g);
console.log(result03);