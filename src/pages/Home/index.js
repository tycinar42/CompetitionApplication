import React,{useEffect} from "react";
import {

fetchDoOnline,
fetchOnLineList
} from '../../store/features/userSlice';
import {useDispatch,useSelector} from 'react-redux';
export default function Index() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const onlineUsers = useSelector(state => state.user.onlineUsers);
  useEffect(()=>{
    dispatch(fetchDoOnline({
      token: token,
    })).then(()=>{
      dispatch(fetchOnLineList({
        token: token,
      }));
    });
  },[dispatch,token]);
  return (
    <>
      <div className="container-fluid text-center mb-2 text-bg-danger">
        <h1>Yarışma Uygulaması</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div
              className="row"
              style={{ minHeight: 350, backgroundColor: "#E97777" }}
            >
              <div className="col-md-12">
                <h3 className="text-center" style={{ color: "white" }}>
                  İşlemler
                </h3>
              </div>
            </div>
            <div
              className="row"
              style={{ minHeight: 550, backgroundColor: "#FF9F9F" }}
            >
              <div className="col-md-12">
                <h3 className="text-center" style={{ color: "white" }}>
                  Online
                </h3>
                <div className="row">
                  {
                    onlineUsers?.map(()=>{
                      return(
                         <div className="col-md-6 mb-1">
                    <div className="ui link cards">
                      <div class="card">
                        <div class="image">
                          <img src="https://semantic-ui.com/images/avatar2/large/matthew.png" alt="" />
                        </div>
                        <div class="content">
                          <div class="header">Muhammet HOCA</div>                         
                        </div>
                        <div class="extra content">
                          <span class="right floated">Join</span>
                          <span>
                            <div style={{width:18,height:18, borderRadius:9, backgroundColor:'green'}}>
                            </div> 
                            <div style={{width:18,height:18, borderRadius:9, backgroundColor:'lightgray'}}>
                            </div> 
                                                       
                          </span>
                        </div>
                      </div>
                      
                    </div>
                        </div>
                      )
                    })
                  }
                 
                 
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-"></div>
        </div>
      </div>
    </>
  );
}
