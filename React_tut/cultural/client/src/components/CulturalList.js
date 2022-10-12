import Cultural from './Cultural';

function CulturalList(props) {
  return (
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
  )
}

export default CulturalList