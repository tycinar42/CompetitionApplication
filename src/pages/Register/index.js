import React,{useState} from 'react'
import {useDispatch} from 'react-redux';
import {
  fetchRegister
} from '../../store/features/authSlice';
import swal from 'sweetalert';
import LoadingButton from '@mui/lab/LoadingButton';
export default function Index() {
  const dispatch = useDispatch();
  const [loading,setLoading] = useState(false);
  const [user,setUser] = useState({
    username: '',
    password: '',
    email: '',
  });
  const getUsername = (evt)=>{    
    setUser({
      ...user, // username,password,email
      username: evt.target.value
    });
  }
  const getPassword = (evt) =>{
    setUser({
      ...user, // username,password,email
      password: evt.target.value
    });
  }
  const getEmail = (evt)=>{
    setUser({
      ...user, // username,password,email
      email: evt.target.value
    });
  }
  const register = ()=>{
    setLoading(true);
    dispatch(fetchRegister(user)).then(()=>{
      /**
       * yukarıdaki dispath işlemi bittikten sonra burası çalışır.
       */
       setLoading(false);
      swal("Harika!", "Başarı ile kayıt oldunuz!", "success");
    });
  
  }
  return (
    <>
    <div className="container-fluid text-center mb-2 text-bg-danger">
      <h1>Register Page</h1>
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
              <label className="form-label"> Email</label>
              <input type="text" className="form-control" onChange={getEmail}/>
            </div>

            <div className="mb-3">             
              <LoadingButton
              onClick={register}
                loading={loading}>
                      Register
              </LoadingButton>
              <a href='/login' className='btn btn-dark'>
                Login
              </a>
            </div>            
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  </>
  )
}
