"use strict";
import axios from "axios";
import {useState, useEffect} from "react";
import "./App.css";
import Tours from "./components/Tours"

function App() {
  const URL = "https://course-api.com/react-tours-project";
  const [tours, setTours] = useState([]);

  function deleteTour(tourID){
    /* tours에 있는 값들 중 id가 tourID와 같지 않은 것만 남겨 result 배열로 생성 */
      const result = tours.filter((tour)=>
        tour.id !== tourID);
    
        setTours(result);
  }

  useEffect(()=> {
    const fetchData = async function (err) {
        const result = await axios.get(URL);

        if(err) {
            throw err;
        }else{
            setTours(result.data);
        }
    }

    fetchData();
  }, []);


  return (
    <div>
      {/* 
        React는 부품(컴포넌트, Component)을 만들어 부품 안에 부품 안에 부품안에....을 조립하여 만듦
        React에서 밑에서 위로(ex. Tours -> App), 옆에서 옆으로 props를 줄 수 없음
        (props는 properties의 줄임말로 재산, 자산등을 의미. 부모 컴포넌트가 자식 컴포넌트에 자산을 양도한다고 생각하면 됨)
        무조건 부모 컴포넌트 자식 컴포넌트(ex. App-> Tours) 내려줘야함 
        (코딩애플 왈: 컴포넌트의 props 전달은 패륜(자식->부모) 불가, 불륜(부모->부모 or 자식->자식) 불가, 할머니->손자 불가)
        또, 한 번에 두 번이상 내려갈 수 없음
      
        자식컴포넌트는 말 그대로 상위 컴포넌트 안에서 사용되는 컴포넌트를 말함
        예를 들어 
        ********************
        function Tours(){ <- Tours 컴포넌트
          return(
            <div>hi</div>
          );
        }
        
        function App(){  <- App 컴포넌트
          return(
              <Tours/>   <- Tours 컴포넌트가 App의 자식 컴포넌트가 되는 순간
          );
        }
        *********************
        인 경우 Tours 컴포넌트 App 컴포넌트의 하위 컴포넌트.
        구조가 App안에 Tours안에 Tour인 경우, App에서 Tour로 props를 바로 줄 수없음
        
        ==> 코드의 볼륨이 커질수록 이렇게 사용하는 것이 너무너무 불편하기때문에 나중에 배울 Redux 라이브러리(실무에서도 많이써서 필수)
        */}
        <Tours tours={tours} deleteTour={deleteTour} />
    </div>
  )
}

export default App