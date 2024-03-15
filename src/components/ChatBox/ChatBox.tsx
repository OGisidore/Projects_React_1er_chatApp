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
import { Discussion } from '../../models/Discussions';
import { User } from '../../models/User';
import { BsFillEmojiHeartEyesFill, BsSendFill } from 'react-icons/bs';


interface ChatBoxProps {
 
}


const ChatBox : FC<ChatBoxProps> = () =>{
  const user : any = data[0]
  const discussion :Discussion[] = user.discussions
  const element : Discussion = discussion[0]
  console.log(element.content);
  
  
 



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="ChatBox container-md p-0 ">
          <ChatBoxHeader userData={user}/>
          <div className="chatContent">
            {
              discussion.map((message:any)=>(
                <div className={"message " + message.status.toLowerCase() }>
                   <p>{message.content}</p>
                   <p className='time'> envoyé le {message.time}</p>
                  </div>
              ))
            }

          </div>
          <div className="chatInsert py-4 sticky-bottom d-flex align-items-center justify-content-around">
          <BsFillEmojiHeartEyesFill />

            <textarea name="message" id='message' placeholder='type your message ...' className=' px-2 rounded' cols={100} rows={1}></textarea>
            <BsSendFill />


          </div>
      </div>
  );
}

export default ChatBox;