import { useContext, useState } from "react";
import "./login.css";
import { AuthContext } from "../../components/context/AuthContext";
import axios from "axios";
import login from "../../components/images/login.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credential, setCredential] = useState({
    username: "",
    password: "",
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handelChange = (e) => {
    setCredential((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    if (!credential.username || !credential.password) {
      alert("Username and password are required.");
      dispatch({ type: "LOGIN_FAILURE", payload: "Username and password are required." });
    } else {
      try {
        const res = await axios.post("http://localhost:8000/api/auth/login", credential);

        if (res.data.message === "User not found!") {
          alert("User not found.")
          dispatch({ type: "LOGIN_FAILURE", payload: "User not found." });
        } 
        else if (res.data.message === "Wrong Password or Username!") {
          alert("Wrong Password or Username.")
          dispatch({ type: "LOGIN_FAILURE", payload: "Wrong Password or Username." });
        }
        else{
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
          navigate("/");
        }
      } catch (error) {
        dispatch({ type: "LOGIN_FAILURE", payload: error?.response.data });
      }
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          className="lInput"
          id="username"
          onChange={handelChange}
        />
        <input
          type="password"
          placeholder="password"
          className="lInput"
          id="password"
          onChange={handelChange}
        />

        <button disabled={loading} onClick={handleLogin} className="lbutton">
          Login
        </button>
        {error && <span>{error?.message}</span>}
      </div>
    </div>
  );
};

export default Login;
