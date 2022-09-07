/* eslint-disable */ // -> warning message hide
 

import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { logDOM } from '@testing-library/react';

function App(){

  let post = "강남 우동 맛집"
  let [글제목,b] = useState(['남자 코트 추천','여자 코트 추천','강남 추천 맛집']); 
  // useState안에는 [state, setState()] 들어있음.
  let [따봉, 따봉변경]= useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title,setTitle] = useState(0);

  let today = new Date();
  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1;  // 월
  let date = today.getDate();  // 날짜
  let day = today.getDay();

  [1,2,3].map(function(){
    return '123123'
  })

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
{/*       
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
      </div> */}

      {
        글제목.map(function(a,i){
          return (<div className="list" key={i}>
                  <h4 onClick={()=>{setTitle(i)}}>{글제목[i]} <span onClick={()=>{
                   let 따봉카피 = [...따봉];
                   따봉카피[i] = 따봉카피[i]+1;
                   따봉변경(따봉카피);
                   }}>👍 {따봉[i]}</span></h4>
                  <p>{year}/{month}/{date}</p>
                    <hr></hr>
                  </div>)
        })
      }

        <h4 onClick={()=>{if(modal == false){ setModal(true)}else setModal(false)}}>모달창 켜기</h4>
       
       
       <input onChange={(e)=>{ console.log(e.target.value)}}/>
       
        {
          // if, for등 안됨
          // 조건식 ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드
          modal == true? <Modal title = {title} 글제목={글제목} 글제목변경={b}/> : null
        
        }

        {/* <Modal/> 가능 */}
        {/* 동적인 UI 만드는 step
        1. html css로 미리 디자인완성
        2. UI의 현재 상태를 state로 저장
        3. state에 따라 UI가 어떻게 보일지 작성  */}
          {/* map : 많은 div들을 반복문으로 줄이고 싶은...  */}


          <button onClick={()=>{
      let 글제목카피 = [...글제목];
      if(인풋!=""){
      글제목카피.push(인풋);
      글제목변경(글제목카피);
      let 따봉추가 = [...따봉];
      따봉추가.push(0);
      따봉변경(따봉추가);  
    }
      
    }}> 글 생성 </button>

    {/* <button onClick={()=>{
      let 글제목삭제 = [...글제목];
      글제목삭제.pop();
      let 따봉삭제 = [...따봉];
      따봉삭제.pop();
      글제목변경(글제목삭제);
      따봉변경(따봉삭제);
    }}> 글 삭제 </button> */}

<Modal2/>
    </div> 


  )
}


 {/* 컴포넌트 만드는 법
 1. function 만들고
 2. return() 안에 html 담기
 3. <함수명></함수명> 쓰기 */}
 
function Modal(props){
  
  return(
    // return안에는 하나의 tag 존재
    // fragment 문법(<>)으로도 가능(div 너무 더러울때 묶기위함)
    <>
  <div className="modal">
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{
          let 글제목카피 = [...props.글제목];
          글제목카피[0] = '여자코트 추천';
          props.글제목변경(글제목카피);}}>글 수정</button>
  </div>
  </>
  )
}

// class를 이용한 컴포넌트 생성
class Modal2 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name : "이호민",
      age : 20
    }
  }
  render(){
    return(
      <div>{this.state.age}
      <button onClick={()=>{
        this.setState({age : 21})
      }}>버튼{this.props}</button></div>
    )
  }
}

//  컴포넌트 쓰면 좋을 때
// 1. 반복적인 html 축약
// 2. 큰 페이지들
// 3. 자주 변경되는 것들


export default App;