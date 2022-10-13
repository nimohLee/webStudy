
/* Router에서는 a 태그를 사용하지 않고 Link를 사용해야함 */
import { Link, useNavigate, NavLink } from 'react-router-dom';
function Navbar() {
  return (
    // <nav className="nav-bar">
    //     <Link to = "/">Home</Link>
    //     <Link to = "/about">About</Link>
    //     <Link to = "/contact">Contact</Link>
    // </nav>

    <nav className="nav-bar">
        <NavLink to = "/">Home</NavLink>
        <NavLink to = "/about">About</NavLink>
        <NavLink to = "/contact">Contact</NavLink>
        <NavLink to = "/orders">Orders</NavLink>
        <NavLink to = "/products">Products</NavLink>
        <NavLink to = "/admin">Admin</NavLink>
    </nav>
  )
}

export default Navbar