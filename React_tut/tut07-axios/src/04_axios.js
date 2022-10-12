import axios from 'axios';
import { useState, useEffect } from 'react';
import Load from './Load';

function App(){
    
    const [joke,setJoke] = useState("U.S joke");
    const URL = "https://icanhazdadjoke.com";
    const fetData = async function(err){
        const result = await axios.get(URL); // await는 메소드 앞에
        if(err){
            throw err;
        }  else{setJoke(result.data.joke);}      
        
    }
useEffect(()=>{
    fetData();
},[])

    return(
        <>
        <h1>{joke}</h1>
        </>
    );
}

export default App;