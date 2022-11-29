import React from 'react'

function OnlineUser(props) {
  const {data} = props;
  return (
    <div className="col-md-12 mb-1">
    <div className="ui link cards">
      <div className="card">                           
        <div className="content">
          <div className="header">{data?.username}</div>
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
  )
}
export default React.memo(OnlineUser);
