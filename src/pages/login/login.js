import { useContext, useState } from 'react'
import "./login.css"
import { AuthContext } from '../../components/context/AuthContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    
    const [credential, setCredential] = useState({
        username: undefined,
        password: undefined,
    });

    const { loading , error, dispatch} = useContext(AuthContext)
    const navigate = useNavigate()
    // console.log(user)
    const handelchange =(e)=>{
        setCredential((prev) => ({...prev , [e.target.id]: e.target.value}));
    };
    const handelClick = async (e) => {
        e.preventDefault();
        dispatch({type:"LOGIN_START"})
        navigate("/")
        try {
            const res = await axios.post("http://localhost:8000/api/auth/login", credential);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
          } catch (error) {
            // console.error("Login error:", error);
            dispatch({ type: "LOGIN_FAILURE", payload: error?.response.data });
          }
    };

    return (
    <div className='login'>
      <div className='lContainer'>
      <input type="text" placeholder="username" className="lInput" id="username" onChange={handelchange} />
      <input type="password" placeholder="password" className="lInput" id="password" onChange={handelchange} />

        <button disabled={loading} onClick={handelClick} className='lbutton'>Login</button>
        {error && <span>{error?.message}</span>}
      </div>
    </div>
  )
}

export default Login
