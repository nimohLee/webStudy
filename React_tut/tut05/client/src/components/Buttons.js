import { useState } from 'react';
function Buttons(){
    function click01(){
        alert("Clicked01..");
    }
    /**
     * @param {any} str
     */
    function click02(str){
        alert(str);
    }

    function changeRegion(){
        setRegion("Seoul");
    }

    function add(){
        
    }

    const [region, setRegion] = useState("Busan");
    return(
        <div>
            <p>{region}</p>
            <button onClick={()=>{setRegion("Seoul")}}>지역바꾸기</button>
        </div>
    );
}
export default Buttons;