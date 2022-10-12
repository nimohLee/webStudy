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
                <button onClick={() => setReadMore(!readMore)}> {/* 버튼 클릭시 readMore의 상태(state)를 반대로(!) -> false를 true로 혹은 true를 false로*/}
                    {readMore ? "줄여서보기" : "자세히보기"}
                </button>
                <button onClick={()=>deleteTour(tour.id)}>삭제하기</button>
            </section>
        </div>
    );
}

export default Tour;
