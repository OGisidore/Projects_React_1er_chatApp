/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 15/03/2024 11:09:42
*/
import React, { FC, useEffect } from 'react';
import './MessageInputBox.css';
import { BsEmojiHeartEyesFill,  BsSendFill } from 'react-icons/bs';


interface MessageInputBoxProps {
 
}


const MessageInputBox : FC<MessageInputBoxProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="MessageInputBox px-2 sticky-bottom d-flex align-items-center justify-content-around">
         <BsEmojiHeartEyesFill/>
         <textarea name="message" id="message " placeholder='type your message here....' className='px-3 d-flex align-items-center mx-2 rounded-pill' cols={90} rows={2}></textarea>
         <BsSendFill/>
      </div>
  );
}

export default MessageInputBox;