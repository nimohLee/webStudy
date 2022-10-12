/* 기존 Tours파일은 자세히보기 클릭 시 모든 여행 리스트가 자세히 보기가 됨*/
/* 따라서 수정함 */
import Tour from './Tour';


/* 상위 Component인 App에서 내려준 props들 을 가져옴 ({tours, deleteTour}) */
function Tours({tours, deleteTour}) {
  return (
    <div>
{
    tours.map((tour,key)=>{
        return(
            <div key={key}>
                <Tour tour={tour} key={key} deleteTour={deleteTour}/>
            </div>
            
        );
    })
}

    </div>
  )
}

export default Tours