import React from "react";

const Mymsg = ({ message })=> {
  const getTime = message.created.substring(11,16);
  console.log(getTime);

  if (message.attachements && message?.attachements?.length > 0) {
    return (
      <img
        src={message.attachements[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }
  return(
      <div className="message" style={{float:'right',marginRight:"18px"  , backgroundColor:"#DCFBC6" ,  minWidth:"20%"}}>
          {message.text}
          <span className="timezone">{getTime}</span>    
      </div>
  )
}
export default Mymsg;
