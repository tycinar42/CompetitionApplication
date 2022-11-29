import React from 'react'
import OnlineUser from '../../components/molecules/OnlineUser';
function OnlineUserList(props) {
    const {onlineUsers} = props;
  return (
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
            <OnlineUser key={index} data={data} />
          );
        })}
      </div>
    </div>
</div>
  )
}
export default React.memo(OnlineUserList);