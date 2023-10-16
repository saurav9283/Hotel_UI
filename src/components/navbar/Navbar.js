import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import india from "../images/india.png";

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);

  const goLogin = () => {
    navigate("/login");
  };
  const goRegister = () => {
    navigate("/register");
  };

  const handleLogout = () => {
    // Perform the logout action
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="navbar">
      <div className="navcontainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Lamabooking</span>
        </Link>
        {user ? (
          <>
            <div>
              <img src={india} alt="india" className="india" />
            </div>
            <div className="user">
              <div>
                <button onClick={handleLogout} className="navButton">
                  Logout
                </button>
              </div>
              {user.username}
            </div>
          </>
        ) : (
          <>
            <div>
              <img src={india} alt="india" className="india" />
            </div>
            <div className="navItems">
              <button className="navButton" onClick={goRegister}>
                Register
              </button>
              <button className="navButton" onClick={goLogin}>
                Login
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
