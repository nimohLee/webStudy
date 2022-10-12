/* 내부 데이터 : axios 안씀 */
import fetchData from "./data/data";
import { useState } from "react";
import Person from './components/Person';
import "./App.css";
function App() {
  const [person, setPerson] = useState(fetchData);
  console.log(person)
  return (
    <div>
        <button onClick={()=>setPerson([])}>All Clear</button>
        <Person person={person}/>
    </div>
  )
}

export default App