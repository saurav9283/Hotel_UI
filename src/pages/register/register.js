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
          // "http://localhost:8000/api/auth/register",
          "https://hotel-management-api.vercel.app/api/auth/register",
          {
            username:credential.username,
            email:credential.email,
            password:credential.password,
          }
          );
          console.log(res.data.msg,"jhvc")

        if (res.data.msg === "Username already Exist!") {
          alert("Username already Exist!");
          dispatch({ type: "LOGIN_FAILURE", payload: "Username already Exist!" });
        } 
        else if (res.data.msg === "Try to other email") {
          alert("Try to other email");
          dispatch({type: "LOGIN_FAILURE",payload: "Try to other email"});
        } 
        else {
          alert(res.data.msg)
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
          navigate("/login");
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
            Register
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
