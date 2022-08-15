/* eslint-disable */ // -> warning message hide
 

import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import { logDOM } from '@testing-library/react';

function App(){

  let post = "강남 우동 맛집"
  let [글제목,b] = useState(['남자 코트 추천','여자 코트 추천','강남 추천 맛집']); 
  // useState안에는 [state, setState()] 들어있음.
  let [따봉, 따봉변경]= useState(0);
  


  /* let과 같이 일반 변수는 자동변경 X
  state는 자동변경 가능
  */
  return ( // return() 안에는 하나의 tag만 존재(크게 묶어야함)
    <div className = "App">
      <div className = "black-nav">
        <h4 id={logo} >ReactBlog</h4>
        <span onClick={() =>{}}></span>
        <button onClick={()=>{
          let copy = [...글제목];
          copy.sort();
          b(copy);
          
        }}>가나다순 정렬</button>
      </div>
      <div className="list">
        <h4>{글제목[0]} <span onClick={()=>{따봉변경(따봉 + 1)}}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
        <span onClick={()=>{b(["여성 코트 추천",'강남 우동맛집','파이썬독학'])}}>글 변경</span>
        <hr></hr>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
        <hr></hr>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      <hr></hr>
      </div>

        <Modal></Modal>
        {/* <Modal/> 가능 */}

      
    </div> 


  )
}

function Modal(){
  
  return(
    // fragment 로 <> 도 가능(div 너무 더러울때 묶기위함)
    <>
  <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
  </div>
  </>
  )
}

//  컴포넌트 쓰면 좋을 때
// 1. 반복적인 html 축약
// 2. 큰 페이지들
// 3. 자주 변경되는 것들


export default App;
