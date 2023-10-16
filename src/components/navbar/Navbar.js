import { Link, useNavigate } from "react-router-dom"
import "./navbar.css"
import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"

function Navbar() {
  const navigate = useNavigate();
  const {user} = useContext(AuthContext)

  const goLogin = () => {
    navigate("/Login")
  }

  return (
    <div className="navbar">
      <div className="navcontainer">
      <Link to="/" style={{color:"inherit" , textDecoration:"none"}}>
        <span className="logo">Lamabooking</span>
      </Link>
        {user ? user.username :(<div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton" onClick={goLogin}>Login</button>
        </div>)}
      </div>
    </div>
  )
}

export default Navbar
