import { useState } from 'react';
function App(){
  const [count,setCount] = useState(0);
  const [location,setLocation] = useState("seoul");
  const [on,setOn] = useState("on");
  function plus(){
    setCount(count+1);
  }
  function minus(){
    if(count < 1 ){
       setCount(0);
    }else{
      setCount(count-1);
    }
  }
  function changeLocation(){
    if(location==="seoul")
      setLocation("busan");
    else
      setLocation("seoul");
  }

  return(
    <div>
      <span>
        {count}
      </span>
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button>
      
      <p>{on==="on"?"seoul":"busan"}</p> {/* seoul -> busan */}
      <button onClick={()=>{
        if(on==="on")
          setOn("off")
        else
          setOn("on");
        }}>클릭하면 글자가 바뀝니다</button>
    </div>
  );
}

export default App;