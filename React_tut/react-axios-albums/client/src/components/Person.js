import React from 'react'

function Person({person}) {
  return (
    <div>
        { 
        
            person.map((p)=>{
                // const {id, name, age, image} = p; // const {사용할변수명} = 넣을 변수 객체;
                return(
                    <div>
                        <p><img src={p.image} alt={p.name} /></p>
                        <h4>{p.name}</h4>
                        <p>{p.age}</p>
                    </div>
                )
                
            })
        }
    </div>
  )
}

export default Person