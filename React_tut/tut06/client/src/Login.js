
import { useState } from 'react';
function Login(){

    const [userid, setUserid] = useState("");
    const [passwd,setPasswd] = useState("");

    /**
     * @param useridError
     * false 예외사항이 x, true는 입력값에 예외사항이 생겼을 때
     */
    const [useridError,setUseridError] = useState(false);
    const [passwdError,setPasswdError] = useState(false);
    
    function useridHandler(e){
        if(e.target.value.length>10){
            setUseridError(true);
            setUserid(e.target.value);
        }else
            setUseridError(false);
    }
    function passwdHandler(e){
        if(e.target.value.length>10){
            setPasswdError(true);
            setPasswd(e.target.value);
        }else
            setPasswdError(false);
    }
    
    function loginHandler(e){
        e.preventDefault();
        if(userid == "" || passwd == ""){
            alert("아이디 혹은 비밀번호를 입력해주세요");
        }else{
            alert("로그인을 진행합니다.");
        }
    }
    
    return(
        <div>
            <form action="" method="post" onSubmit={loginHandler}>
                <div>아이디 : <input type="text" onChange={(e)=>useridHandler(e)}/></div> 
                <span>{
                        useridError==false?"아이디가 유효하지 않습니다.":"아이디가 유효합니다"
                    }
                    </span>
                <div>비밀번호 : <input type="text" onChange={(e)=>passwdHandler(e)} /></div>
                {
                        passwdError==false?"비밀번호가 유효하지 않습니다.":"비밀번호가 유효합니다"
                    }
                <div><input type="submit" value="Login"/></div>


            </form>
        </div>
    );
}

export default Login;