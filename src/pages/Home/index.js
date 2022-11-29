import React, { useEffect, useState } from "react";
import { fetchDoOnline, fetchOnLineList, fetchDoOffline } from "../../store/features/userSlice";
import { fetchFindAllQuestions} from "../../store/features/mainSlice";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';
import OnlineUserList from "../../components/organisms/OnlineUserList";
import Question from '../../components/molecules/Question';
export default function Index() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const myprofile = useSelector((state) => state.user.myprofile);
  const onlineUsers = useSelector((state) => state.user.onlineUsers);
  const questionsList = useSelector((state) => state.main.questionsList);
  const [activeQuestionIndex,setActiveQuestionIndex] = useState(0);
  const [answerList,setAnswerList] = useState([]);
  const [isFinished,setIsFinished] = useState(false);
  const doAnswer = (index, answerId)=>{
    console.log('doAnswer',index, answerId);
    setAnswerList([
      ...answerList,
      {
        answerId: answerId,
        index: index
      }
    ])
    if(activeQuestionIndex < questionsList.length - 1){
      setActiveQuestionIndex(activeQuestionIndex+1);
    }else{
      setIsFinished(true);
    }
  }
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
    dispatch(fetchFindAllQuestions());
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
            {
              isFinished ? (
                <h1>Bittiiiiiiii.</h1>
              )
              : <Question                  
                size={questionsList?.length}
                doAnswer={doAnswer}
                data={questionsList[activeQuestionIndex]} 
                index={activeQuestionIndex}/>
            }
             
          </div>
          <div className="col-md-2 " style={{marginLeft:8}}>
            <OnlineUserList onlineUsers={onlineUsers} />
          </div>
        </div>
      </div>
    </>
  );
}
