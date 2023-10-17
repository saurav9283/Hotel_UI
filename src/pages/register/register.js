import { useContext, useState } from "react";
import "./register.css";
import { AuthContext } from "../../components/context/AuthContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [credential, setCredential] = useState({
    username: "",
    email:"",
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
      dispatch({
        type: "LOGIN_FAILURE",
        payload: "Username and password are required.",
      });
    } else {
      try {
        const res = await axios.post(
          "https://hotel-management-api.vercel.app/api/auth/register",
          credential
        );

        if (res.data.message === "User not found!") {
          alert("User not found.");
          dispatch({ type: "LOGIN_FAILURE", payload: "User not found." });
        } else if (res.data.message === "Wrong Password or Username!") {
          alert("Wrong Password or Username.");
          dispatch({
            type: "LOGIN_FAILURE",
            payload: "Wrong Password or Username.",
          });
        } else {
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
      <div className="lbox">
        <div className="lContainer">
          <label className="label">Username:</label>
          <input
            type="text"
            placeholder="username"
            className="lInput"
            id="username"
            onChange={handelChange}
          />
          <label className="label1">Email:</label>
          <input
            type="email"
            placeholder="Email"
            className="lInput"
            id="email"
            onChange={handelChange}
          />
          <label className="label1">Password:</label>

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
          <p className="r">
            Already have an account? <Link to={"/login"}>Login</Link>
          </p>
          {error && <span>{error?.message}</span>}
        </div>
      </div>
    </div>
  );
};

export default Register;
