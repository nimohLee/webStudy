
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import CulturalList from './components/CulturalList';
import "./App.css";
function App() {
  const culturalURL = "https://apis.data.go.kr/6480000/gyeongnamcultural/gyeongnamculturallist?serviceKey=4mCHRrny0YxTO%2FFg2dNd8TRWuEgsP%2BDGtAtCl2VuaU0hLNx1GESzW8mCHf8z72%2FbJac9Y0Pc%2FLI%2Fq1k5EMnqvw%3D%3D&numOfRows=10&pageNo=1&resultType=json";
  const [culturalItems, setCulturalItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  
  useEffect(()=>{
    // setIsLoading(false);
    const fetchData = async function (err){
      const result = await axios.get(culturalURL);
      if(err) throw err;
      else
        setCulturalItems(result.data.gyeongnamculturallist.body.items.item);  
      setIsLoading(false);
      }
    
    fetchData();
  },[]);
  
  
  return (
    <div>
       {
        isLoading ? <h1>Loading...</h1> : <CulturalList culturalList = {culturalItems}/>
       }
       
    </div>
  )
}

export default App