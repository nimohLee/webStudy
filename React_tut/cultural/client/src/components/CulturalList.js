import Cultural from './Cultural';

function CulturalList(props) {
  return (
    <>
    <h1 style={{textAlign : "center", paddingBottom : "40px", borderBottom:"1px solid black"}}>경상남도 자주찾는 문화재</h1>
    <div className="cultural-list-wrap">
        {
          props.culturalList.map((item)=>{
              return(<>
                    <Cultural cultural={item}/>
                    <hr />
                    <br />
                    </>        
              );
          })
        }        
    </div>
    </>
  )
}

export default CulturalList