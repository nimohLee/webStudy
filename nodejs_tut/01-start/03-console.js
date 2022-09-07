/* 1. 회원이 여러 명일 때 [{},{},{}] */

const users = [
    {
        id: 1, 
        userid : "busanit",
        passwd : '12345',
        username : "KIM",
        gender : "M"
    },
    {
        id: 2, 
        userid : "seoulit",
        passwd : '12345',
        username : "LEE",
        gender : "M"
    },
    {
        id: 3, 
        userid : "jejuit",
        passwd : '12345',
        username : "PARK",
        gender : "W"
    }
];

/* 일반적인 for 문 */
for (let i = 0;i < users.length; i++){
    // console.log(users[i].userid);
}

/* forEach(value,index) */
users.forEach((user,i)=>{
    // console.log(`${i} : ${user.userid}`);
})

// users.forEach(user=> console.log(user)); //한 줄이면 가능

/* 2. push - 배열에 삽입 */
users.push({id : 4, userid: "daeguit",passwd:"12345",username:"Jeong",gender:"W"});
