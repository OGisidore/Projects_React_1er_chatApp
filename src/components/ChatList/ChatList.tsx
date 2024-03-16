/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 15/03/2024 11:09:42
*/
import React, { FC, useEffect } from 'react';
import './ChatList.css';
import { messages } from '../../Api/messages';
import { Message } from '../../models/Message';
import ChatItem from '../ChatItem/ChatItem';


interface ChatListProps {
  
  lastMessage : Message
 
}


const ChatList : FC<ChatListProps> = ({lastMessage}) =>{
  
  const Discussion : Message[] = [ ...messages ,lastMessage ]
  console.log(Discussion);
  



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="ChatList overflow-auto ">
         {
          Discussion.map((message:Message,index:number)=>{
            return <ChatItem key={index} messageItem={message}/>
          }
          )
         }
      </div>
  );
}

export default ChatList;