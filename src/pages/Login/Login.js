import React from "react";
import {useDispatch} from 'react-redux';
import {
    fetchLogin
} from '../../store/features/authSlice';
import {useNavigate} from 'react-router-dom';
export default function Login() {
  const navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");   
    const getUsername = (evt) =>{
        setUsername(evt.target.value);
    }
    const getPassword = (evt) =>{
        setPassword(evt.target.value);
    }

    const login = ()=>{
        dispatch(fetchLogin({
            'username': username,
            'password': password
        })).then(()=>{         
          navigate.call(null,"/");
        });
    }

    React.useEffect(()=>{   
    },[]);

  return (
    <>
      <div className="container-fluid text-center mb-2 text-bg-danger">
        <h1>Login Page</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
              <div className="mb-3">
                <label className="form-label"> User Name</label>
                <input type="text" className="form-control" onChange={getUsername}/>
              </div>
              <div className="mb-3">
                <label className="form-label"> Password</label>
                <input type="text" className="form-control" onChange={getPassword}/>
              </div>
              <div className="mb-3">
                <button className="btn btn-success" onClick={login}>Login</button>
              </div>
              <div className="mb-3">
                <a className="btn btn-outline-danger" href="/register">Register</a>
              </div>
              
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
}
