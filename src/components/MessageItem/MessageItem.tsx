/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 15/03/2024 11:09:42
*/
import React, { FC, useEffect } from 'react';
import './MessageItem.css';
import { Link } from 'react-router-dom';
import { Message } from '../../models/Message';
import { Chat } from '../../models/Chat';


interface MessageItemProps {
  Item : Chat
 
}


const MessageItem : FC<MessageItemProps> = ({Item}) =>{

  let message = Item.lastMessage.content
  let cutMessage = message.length > 20 ? message.substring(0,20)+"...":message;
  const fullname = Item.participants[1].fullName
  console.log(fullname);
  



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <Link to={"/message/" + Item._id} className="MessageItem border-bottom d-flex justify-content-between p-2">
        <div className="message d-flex align-items-center p-1">
          <img src={Item.imageUrl} alt={Item.lastMessage.sender} height={50} width={50} className='rounded-circle' />
          <div className="sender px-1">
            <h3>{fullname}</h3>
            <p>{cutMessage} </p>
          </div>
        </div>
        <div className="timeCount d-flex gap-2 ">
          <p>{Item.time} </p>
          {(Item.unreadCount!) > 1?  <p className='rounded-circle  unreadCount'> {Item.unreadCount}</p>: ""}

        </div>
      </Link>
  );
}

export default MessageItem;