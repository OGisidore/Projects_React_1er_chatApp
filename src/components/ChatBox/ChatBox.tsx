/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/03/2024 15:25:22
*/
import React, { FC, useEffect } from 'react';
import './ChatBox.css';
import { data } from '../api/data';
import ChatBoxHeader from '../ChatBoxHeader/ChatBoxHeader';


interface ChatBoxProps {
 
}


const ChatBox : FC<ChatBoxProps> = () =>{
  const user = data[0]
 
  
 



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="ChatBox container-sm">
          <ChatBoxHeader userData={user}/>
          <div className="chatContent">
            {
              user.discussions?.map((message:any)=>(
                <div className={"message " + message.status }>{message.status}</div>
              ))
            }

          </div>
          <div className="chatInsert">

          </div>
      </div>
  );
}

export default ChatBox;