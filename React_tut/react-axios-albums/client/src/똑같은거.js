import React from 'react'
import Albums from './components/Albums';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Loading from './components/Loading';
import "./App.css";
function App() {
  const URL = "https://jsonplaceholder.typicode.com/albums";
  const [albums,setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async function (){
    const result = await axios.get(URL);
    setAlbums(result.data.slice(0,20));
    setIsLoading(false);
  }

  useEffect(()=>{ 
    fetchData();
    return () =>{
      setIsLoading(true);
    }
  },[]);
 
  console.log(albums);
  return (
    <div>
      {
        isLoading===true?<Loading/>:<Albums albums={albums}/>
      }
    </div>
  )
}

export default App