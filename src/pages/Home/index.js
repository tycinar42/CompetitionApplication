import React, { useEffect } from "react";
import { fetchDoOnline, fetchOnLineList, fetchDoOffline } from "../../store/features/userSlice";
import { fetchFindAllQuestions} from "../../store/features/mainSlice";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';
export default function Index() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const myprofile = useSelector((state) => state.user.myprofile);
  const onlineUsers = useSelector((state) => state.user.onlineUsers);
  const questionsList = useSelector((state) => state.main.questionsList);
  const doOffline = ()=>{
    dispatch(fetchDoOffline({token: token}));
    navigate.call(null,"/login");
  }
  useEffect(() => {
    dispatch(
      fetchDoOnline({
        token: token,
      })
    );
    dispatch(fetchFindAllQuestions({token: token}));
   const refreshpage =  setInterval(() => {
      dispatch(
        fetchOnLineList({
          token: token,
        })
      );
    }, 1000);
    return ()=>{
      clearInterval(refreshpage);
    }
  }, [dispatch, token]); 
  return (
    <>
      <div className="container-fluid text-center mb-2 text-bg-danger">
        <h1>Yarışma Uygulaması</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div
              className="row"
              style={{ minHeight: 350, backgroundColor: "#E97777" }}
            >
              <div className="col-md-12">
                <h3 className="text-center" style={{ color: "white" }}>
                  İşlemler
                </h3>
                <div style={{flex:1}}>
                  <button onClick={doOffline} 
                   style={{position:'absolute', top:1,right:'23%'}} 
                   className='btn btn-info'>{myprofile?.username} Logout</button>
                </div>
              </div>
            </div>
          
          </div>
          <div className="col-md-7">
            </div>
          <div className="col-md-2 " style={{marginLeft:8}}>
          <div  className="row"
              style={{ minHeight: 550, backgroundColor: "#FF9F9F" }}
            >
              <div className="col-md-12">
                <h3 className="text-center" style={{ color: "white" }}>
                  Online
                </h3>
                <div className="row">
                  {onlineUsers?.map((data, index) => {
                    return (
                      <div key={index} className="col-md-12 mb-1">
                        <div className="ui link cards">
                          <div className="card">                           
                            <div className="content">
                              <div className="header">{data.username}</div>
                            </div>
                            <div className="extra content">
                              <span className="right floated">Online</span>
                              <span>
                                <div
                                  style={{
                                    width: 18,
                                    height: 18,
                                    borderRadius: 9,
                                    backgroundColor: "green",
                                  }}
                                ></div>
                                
                                {
                                  /**
                                    <div
                                  style={{
                                    width: 18,
                                    height: 18,
                                    borderRadius: 9,
                                    backgroundColor: "lightgray",
                                  }}
                                ></div>

                                   */
                                }
                               
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
