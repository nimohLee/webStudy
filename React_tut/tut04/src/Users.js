import { useState } from 'react';


function Users({username,addr,tel,hp}) {
    const [uname,setUname] = useState(username);

    const [count,setCount] = useState(0);

    function add(){
        
    }
    const users = {
        id:1,
        userid: 'busanit'
    };
    const[users1,setUsers1] = useState(users);
    return( // 화면 렌더링 
    <>
    <h1>이름 : {username}</h1>
    <h1>주소 : {addr}</h1>
    <h1>tel/hp : {tel}/{hp}</h1>

    <p>{uname}</p>
    </>
    );
}

export default Users;