/* JS Object -> JSON(JavaScript Object Notation) */
const users = [
    {id : 1, userid : "busanit", passwd : "12345", gender : "M" , regdate : "2022-09-08"},
    {id : 2, userid : "seoulit", passwd : "12345", gender : "F" , regdate : "2022-09-08"},
    {id : 3, userid : "daeguit", passwd : "12345", gender : "F" , regdate : "2022-09-08"}
];

const result = JSON.stringify(users);
console.log(result);