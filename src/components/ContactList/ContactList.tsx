/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 15/03/2024 11:09:42
*/
import React, { FC, useEffect } from 'react';
import './ContactList.css';
import { profile } from 'console';
import { profils } from '../../Api/profils';
import { Profil } from '../../models/Profil';
import ContactItem from '../ContactItem/ContactItem';


interface ContactListProps {
 
}


const ContactList : FC<ContactListProps> = () =>{

 const contacts : Profil[] = profils.filter((profil:Profil)=> !profil.isUser)

    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="ContactList">
         {
          contacts.map((profil : Profil, index:number)=>{
             return <ContactItem key={index} contact={profil}/>
          }
         )
         }
      </div>
  );
}

export default ContactList;