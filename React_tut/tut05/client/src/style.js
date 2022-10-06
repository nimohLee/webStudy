
import './App.css';
import { useState } from 'react';
import Buttons from './components/Buttons';

function App() {
  const [str,setStr] = useState("");
  const [show,setShow] = useState(true);
  /* 외부스타일시트(파일을 별도) : css의 class와 동일하게 className으로 사용해야 함 */
  const styles = {
    color : "#f00",
    backgroundColor : "#000"
  };

  return (
    <div className="App">
       <h1>여기에 표시</h1>
       <button onClick={()=>{if(show){setShow(false)} else setShow(true)}}>Hide</button>
      {show==true?<h1>True</h1>:<h1>False</h1>}

    </div>
  );
}

export default App;
