
import { useNavigate } from 'react-router-dom';

function Orders() {
    const navigate = useNavigate();
    return (
    <div>
        <h2>Let's order!!</h2>
        {/* back 버튼 이동 */}
        <button onClick={()=>{
            navigate(-1) // 뒤로가기
        }}>back</button>
    </div>
  )
}

export default Orders