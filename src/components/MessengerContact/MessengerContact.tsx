/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 20/03/2024 10:27:49
*/
import React, { FC, useEffect, useState } from 'react';
import './MessengerContact.css';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Chat } from '../../models/Chat';
import { Profil } from '../../models/Profil';
import { chats } from '../../Api/chats';
import { BsDot } from 'react-icons/bs';


interface MessengerContactProps {
 
}


const MessengerContact : FC<MessengerContactProps> = () =>{
  
  
  var location = useLocation();
  var pathname = location.pathname;
  var elementApresMessage = pathname.split("/")[2];
  console.log(elementApresMessage);
 
  let slug = elementApresMessage
  let contact :any;
 var profil : any;
  if (slug) { 
    
    contact = chats.filter((chat:Chat)=> chat._id === slug?.toString())[0]
   console.log(contact);
   profil = contact.participants[1].profile
   console.log(profil);
   
   
  }
  
  
    useEffect(() => {
      // 
      window.scrollTo(0,0)
      
    },[slug])

  return (
    <div className='d-flex gap-2'>
    <img src={contact?.imageUrl} alt={contact?.participants[1].fullName} className='rounded-circle' height={40} width={40} />
    <div className="desc">
      <h2>{contact?.participants[1].fullName}</h2>
      <p><strong className={'BsDot ' + (profil?.connected? "Enligne":"") }>.</strong>{profil?.connected? "En ligne":"hors ligne"} </p>
      
    </div>
  </div>
  
  );
}

export default MessengerContact;