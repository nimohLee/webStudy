
import './App.css';
import { useState } from 'react';

function App() {
  const [str,setStr] = useState("");

  /* 외부스타일시트(파일을 별도) : css의 class와 동일하게 className으로 사용해야 함 */
  const styles = {
    color : "#f00",
    backgroundColor : "#000"
  };

  return (
    <div className="App">
        <h1>useState Hook 사용</h1>
        <h1>{str}</h1>
        <h1>
          input에 입력한 내용이 여기에 표시됩니다. (handleInput)
        </h1>
        <p style={styles}>아이디</p>
        <input type="text" onChange={(e)=>setStr(e.target.value)}/>
    </div>
  );
}

export default App;
