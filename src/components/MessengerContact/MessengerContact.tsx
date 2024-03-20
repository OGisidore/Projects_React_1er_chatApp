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


interface MessengerContactProps {
 
}


const MessengerContact : FC<MessengerContactProps> = () =>{
  const { slug } = useParams();
  const [contact, setContact] = useState<Chat | undefined>();


  // let {slug} = useParams()
  // let contact : Chat;
  // let profil : Profil;
  // if (slug) {
  //   contact = chats.filter((chat:Chat)=> chat._id === slug?.toString())[0]
  //  console.log(contact);
  //  profil = contact.participants[1].profile
   
  // }
  console.log(slug);
  
    useEffect(() => {
      if (slug) {
        const foundContact = chats.find((chat: Chat) => chat._id === slug);
        setContact(foundContact);
      }
      window.scrollTo(0,0)
      
    },[slug])

  return (
    <div className='d-flex gap-2'>
    <img src={contact!.imageUrl} alt={contact!.participants[1].fullName} className='rounded-circle' height={40} width={40} />
    <div className="desc">
      <h2>{contact!.participants[1].fullName}</h2>
      <p>En ligne</p>
    </div>
  </div>
  );
}

export default MessengerContact;