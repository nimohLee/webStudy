import axios from 'axios';
import { useEffect, useState } from 'react';

function App(){
    const[products,setProducts] = useState([]);
const URL = "https://dummyjson.com/products";
const fetchData = async function(){
    const result = await axios.get(URL);
    setProducts(result.data.products);
}

useEffect(()=>{
    fetchData();
},[])
    return(
        <>
            {
              products.map((product,key)=>{
                    return(<>
                    <div className="image-container">
                        <img src={product.thumbnail} alt="" />
                    </div>
                    <div className="description">
                        <h3>{product.title}</h3>
                        <h6>{product.description}</h6>
                    </div>
                    </>
                    )
                    ;
              })  
            }

        </>
    );
}

export default App;