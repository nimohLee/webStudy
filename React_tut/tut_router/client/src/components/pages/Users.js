import { Link } from "react-router-dom";

function Users() {
  return (
    <div style={{margin: "20px"}}>
        
        <ol>
            <li>
                <Link to="user/1">User 01</Link>
            </li>
            <li style={{ marginTop:"10px",marginBottom:"10px"}}>
                <Link to="user/2">User 02</Link>
            </li>
            <li>
                <Link to="user/3">User 03</Link>
            </li>
        </ol>
    </div>
  )
}

export default Users