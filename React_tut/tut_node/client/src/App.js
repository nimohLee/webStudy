import axios from "axios";
import { useEffect } from 'react';

function App() {

  async function postData(){
      await axios.post("http://localhost:5003/setUserid",{"userid" : "busanit"});
  }

  useEffect(()=>{
    // postData();
  },[])

  return (
    <>    
    안녕하세요
    </>
  );
}

export default App;