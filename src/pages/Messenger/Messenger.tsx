/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 15/03/2024 11:06:19
*/
import React, { FC, useEffect,Fragment, useState } from 'react';
// import Loading from '../Loading/Loading';
import './Messenger.css';
import {  useParams } from 'react-router-dom';
import { chats } from '../../Api/chats';
import { Chat } from '../../models/Chat';
import ChatList from '../../components/ChatList/ChatList';
import MessageInputBox from '../../components/MessageInputBox/MessageInputBox';
import { Profil } from '../../models/Profil';


interface MessengerProps {
 
}


const Messenger : FC<MessengerProps> = () =>{


    // const [state, setState] = useState<any>(null)
    
    let {slug} = useParams()
    let contact : Chat;
    let profil : Profil;
    if (slug) {
      contact = chats.filter((chat:Chat)=> chat._id === slug?.toString())[0]
     console.log(contact);
     profil = contact.participants[1].profile
     
      
      
    }
    

    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

       
      }
      runLocalData()
    },[])

  return (
    <Fragment>
    {
      <div className="Messenger">
        
         <ChatList lastMessage={contact!.lastMessage} />
         <MessageInputBox/>
      </div>
    }
    </Fragment>
  );
}

export default Messenger;