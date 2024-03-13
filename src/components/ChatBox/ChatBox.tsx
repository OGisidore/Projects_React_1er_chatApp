/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/03/2024 15:25:22
*/
import React, { FC, useEffect } from 'react';
import './ChatBox.css';


interface ChatBoxProps {
 
}


const ChatBox : FC<ChatBoxProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="ChatBox">
          ChatBox Component
      </div>
  );
}

export default ChatBox;