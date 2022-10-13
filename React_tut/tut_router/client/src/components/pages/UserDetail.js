import { useParams, useNavigate } from "react-router-dom"

function UserDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
  return (
    <div>
        <h3>사원번호 {id}번 : 개인정보 상세보기</h3>
        <p>상세보기(table)</p>
        <button onClick={()=> navigate(-1)}>Back</button>
        <button onClick={()=>navigate("/admin")}>List</button>
        <button onClick={()=> navigate("/")}>Home</button>
    </div>
  )
}

export default UserDetail