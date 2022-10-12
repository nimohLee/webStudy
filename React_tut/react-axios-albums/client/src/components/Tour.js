import { useState } from "react";

function Tour({ tour ,key, deleteTour}) {
    const [readMore, setReadMore] = useState(false);
    return (
        <div>
            <section>
                <img src={tour.image} alt={tour.name} />
                <div>
                    <h4>{tour.name}</h4>
                    <h4>{tour.price}</h4>
                </div>

                <p>
                    {readMore ? tour.info : tour.info.substring(0, 20) + "..."}
                </p>
                {/* 버튼 클릭시 값이 boolean 타입인 state의 토글기능(스위치)을 구현하기 위해서는 setReadMor(!readMore) -> false면 true로, true면 false로*/}
                <button onClick={() => setReadMore(!readMore)}> 
                    {readMore ? "줄여서보기" : "자세히보기"}
                </button>
                <button onClick={()=>deleteTour(tour.id)}>삭제하기</button>
            </section>
        </div>
    );
}

export default Tour;
