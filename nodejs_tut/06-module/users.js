/* db 또는 file에 회원가입한 사용자가 저장되어 있다고 가정 */
const persons = ["KIM","LEE","PARK","CHOI"];
const color = ["RED","GREEN","BLUE"];
const obj = [{
    id : 1,
    name : "이호민",
    age : 27   
},
{
    id : 2,
    name : "이호민2",
    age : 26   
},
{
    id : 3,
    name : "이호민3",
    age : 21   
}];
// 모듈 exports
// module.exports.person = persons;
// module.exports.color = color;
// module.exports.homin = obj;

module.exports = {
    person : persons,
    color : color,
    homin : obj
}
