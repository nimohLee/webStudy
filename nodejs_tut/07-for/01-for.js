/* 
    1. for - of : java 향상된 for
    2. forEach : 빈도 높음
*/
const colors = ["RED","GREEN","BLUE"];

for(let color of colors){
    console.log(color);
}

// colors.map((color,i)=>{
//     console.log(`${i}는 ${color}`);
// });

console.log("------------------------------------");
const str = "KOREA";
for(let s of str) console.log(s);

console.log("------------------------------------");
const jsObj = [{
id : 1,
name : 'KOREA'
},
{
    id : 2,
    name : 'USA'
},
{
    id :3,
    name : 'JAPAN'
}];

for(let obj of jsObj) console.log(obj);

jsObj.forEach((o)=>{
    console.log(o);
})