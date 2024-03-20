/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 15/03/2024 11:09:42
*/
import React, { FC, useEffect } from 'react';
import './ChatItem.css';
import { Message, TypeMessage } from '../../models/Message';


interface ChatItemProps {
  messageItem: Message

}


const ChatItem: FC<ChatItemProps> = ({ messageItem }) => {

  const DisplayMessageByType = () => {
    const message: TypeMessage | string = messageItem.type
    switch (message) {
      case TypeMessage.TEXT:
        return <p>{messageItem.content}</p>

        break;
      case TypeMessage.VIDEO:
        return <video controls src={messageItem.content}></video>

        break;
      case TypeMessage.IMAGE:
        return <img src={messageItem.content} alt="" />

        break;
      case TypeMessage.PDF:
        return <embed src={messageItem.content} type="application/pdf" />

        break;
        case TypeMessage.AUDIO:
          return <audio controls src={messageItem.content}></audio> 
  
          break;

      default:
        return <p>{messageItem.content}</p>
        break;
    }
  }



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className={"ChatItem rounded " + ( messageItem.ownership === "user"? "user":"")}>
      {DisplayMessageByType()}
      <div className="time"> envoyé le {messageItem.create_at?.toLocaleString()}</div>

    </div>
  );
}

export default ChatItem;