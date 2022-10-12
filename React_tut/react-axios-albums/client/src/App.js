import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import  Loading  from './components/Loading'
function App() {
  
  const URL = "https://jsonplaceholder.typicode.com/album";
  const [albums,setAlbums] = useState([]);
  const [isLoading,setIsLoading] = useState(false);

  //useEffect (화살표함수, []);
  useEffect(()=>{
    const fetchData = async function(){
      const result = await axios.get(URL);
      setAlbums(result.data.slice(0,20));
      setIsLoading(false);
    }
      setIsLoading(true);
    fetchData();
  },[]); // [] 없으면 화면 변화가 일어날 때 마다 자료 불러오기 
  return (
    <>
      
        {
          isLoading == true ? <Loading/> : 
          albums.map((album,key)=> {
            return(
              <div key={key}>
              <h2>{album.id}</h2>
              <h2>{album.title}</h2>
              </div>
            ); 
          })
        }
      
    </>
  );
}

export default App;
