
import './App.css';
import {useEffect} from 'react';
import {useState} from 'react';
import styled from 'styled-components';

function App() {
  const [count, setCount] = useState(0);

  const Button = styled.button`
    width : 400px;
    height : 300px;
  `;

  return(
  <>
    <Com></Com>
    <h1>Count : {count} </h1>
    <button onClick={()=>setCount(count+1)}>클릭!</button>
    {/* <Button onClick={()=>setCount(count+1)}>클릭!</Button> */}
    
  </>
  );
}

function Com(){
  return(
    <>
    <h1>안녕하세요</h1>
    <h2>이호민입니다.</h2>
    </>
  );
}
export default App;
