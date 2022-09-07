const olds = [1,2,3,4,5];
const news = [5,6,7,8,9,10];

/* 기존 자료를 출력 */
console.log(olds);
console.log(...olds);   

/* concat 이어 붙이기 */
console.log('concat');
const concatResult = olds.concat(news);
console.log(concatResult); 

/* spread operator 이어 붙이기 */
console.log('spread operator');
const soResult = [...olds, ...news];
console.log(soResult);
const soResult2 = [...olds, ...news,11];
console.log(soResult2);