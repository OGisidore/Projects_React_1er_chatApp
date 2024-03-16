/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 15/03/2024 11:09:42
*/
import React, { FC, useEffect } from 'react';
import './MessageList.css';
import { messages } from '../../Api/messages';
import { Message } from '../../models/Message';
import MessageItem from '../MessageItem/MessageItem';
import { chats } from '../../Api/chats';
import { Chat } from '../../models/Chat';


interface MessageListProps {
 

 
}


const MessageList : FC<MessageListProps> = () =>{






    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="MessageList">
         {
          chats.map((message : Chat, index : number)=> {
            return <MessageItem Item={message}/>
          }
        )

         }
      </div>
  );
}

export default MessageList;