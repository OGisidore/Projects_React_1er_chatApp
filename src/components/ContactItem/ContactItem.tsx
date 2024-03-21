/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 15/03/2024 11:09:42
*/
import React, { FC, useEffect } from 'react';
import './ContactItem.css';
import { Profil } from '../../models/Profil';
import { Link } from 'react-router-dom';
import { BsDot, BsFillCameraFill, BsFillCameraVideoFill, BsTelephoneFill } from 'react-icons/bs';


interface ContactItemProps {
  contact:Profil
 
}


const ContactItem : FC<ContactItemProps> = ({contact}) =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="Contactcontact">
          <Link to={"/message/" +( parseInt(contact._id!) - 1)} className="Messagecontact border-bottom d-flex justify-content-between p-2">
        <div className="message d-flex align-contacts-center p-1">
          <img src={contact.picture} alt={contact.fullName} height={50} width={50} className='rounded-circle' />
          <div className="sender px-3">
            <h3>{contact.fullName}</h3>
            <p><strong className={'BsDot ' + (contact.connected? "Enligne":"") }>.</strong> {contact.connected? "En ligne":"Hors ligne"} </p>
          </div>
        </div>
        <div className="action gap-2 d-flex justify-content-between align-items-center ">
          <BsTelephoneFill/>
          <BsFillCameraVideoFill/>
          

        </div>
      </Link>
      </div>
  );
}

export default ContactItem;