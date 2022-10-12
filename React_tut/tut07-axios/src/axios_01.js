/* 
1. npm i axios
2. 사용할 파일 상단에 import axios from 'axios';
3.
4. get, post
 */

import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
function App() {
    const [store,setStore] = useState([]);
   
    const axios연습 = async function() { // 함수 이름 앞에 async
                const result = await axios.get("https://course-api.com/react-store-products"); // await는 메소드 앞에
                setStore(result.data);
  }
  useEffect(()=>{
    axios연습();
  },[]);

  // store.map((별명,key) =>{
  //   console.log(1);
  // })
  return (
    <div className="App">
        {store.map((s,key)=>{
          return(<p>{s.name}</p>);
        })}
    </div>
  );
}

export default App;
