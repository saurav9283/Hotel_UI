import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);


  const goLogin = () => {
    navigate("/Login");
  };

  const handleLogout = () => {
    // Perform the logout action
    dispatch({ type: "LOGOUT" });
  }

  return (
    <div className="navbar">
      <div className="navcontainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Lamabooking</span>
        </Link>
        {user ? (
          <div className="user">
            <div>
              <button onClick={handleLogout} className="logout">Logout</button>
            </div>
            {user.username}
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton" onClick={goLogin}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
