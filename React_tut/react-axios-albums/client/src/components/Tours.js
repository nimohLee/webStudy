/* 기존 Tours파일은 자세히보기 클릭 시 모든 여행 리스트가 자세히 보기가 됨*/
/* 따라서 수정함 */
import Tour from './Tour';
function Tours({tours}) {
  return (
    <div>
{
    tours.map((tour,key)=>{
        return(
            <div key={key}>
                <Tour tour={tour}/>
            </div>
            
        );
    })
}

    </div>
  )
}

export default Tours