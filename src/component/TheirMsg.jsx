import React from "react";
import { useState }  from 'react';

const TheirMsg = ({ message, lastMessage }) => {

  // console.log(lastMessage);
  const isFirstMessage =
    !lastMessage || lastMessage.sender.username !== message.sender.username;
  // const sendDate = message.created.substring(0, 10);
  let date = new Date().getDate().toString();
  const month = (new Date().getMonth() + 1).toString;
  const year = new Date().getFullYear().toString;
  const getDateBySend = message.created.substring(0,10).substring(8, 10);
  const getmonthBySend = message.created.substring(0,10).substring(5, 7);
  const getyearBySend = message.created.substring(0,10).substring(0, 4);
  let forRendomColor = message.sender.username.length;
  let forRendomColor2 = message.sender?.last_name.length;
  
  const getTime = message.created.substring(11,16);
  console.log(getTime);


  return (
    <>
      <div className="message-row">
        {isFirstMessage && (
          <>
          <div
            className="message-avatar"
            style={{
              backgroundImage:
                message.sender && `url(${message?.sender?.avatar})`,
            }}
          />
          
          </>
        )}
        {message.attachements && message.attachements.length > 0 ? (
          <img
            src={message.attachements[0].file}
            alt="message-attachment"
            className="message-image"
            style={{ marginLeft: isFirstMessage ? "4px" : "48px" }}
          />
        ) : (
          <div
            className="message"
            style={{
              float: "left",
              marginLeft: isFirstMessage ? "4px" : "48px",
              marginTop: isFirstMessage ? "25px" : "",
              marginBottom: "7px",
              backgroundColor: "#ffff",
              minWidth:"20%"
            }}
          >
          {
            isFirstMessage &&<><p style={{color:`rgb(${forRendomColor}0${forRendomColor2}, ${forRendomColor2}${forRendomColor}, 29)` ,fontWeight:"500" , marginTop:'-5px', marginBottom:"5px" }}>{message.sender.username}</p></> 
          }
            {message.text}
            <span className="timezone">{getTime}</span>

          </div>
        )}
      </div>
    </>
  );
};

export default TheirMsg;
