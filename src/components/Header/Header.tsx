/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 15/03/2024 11:09:42
*/
import React, { FC, useEffect } from 'react';
import './Header.css';
import { Link, useLocation, useParams } from 'react-router-dom';
import { BsArrowLeft, BsThreeDotsVertical } from 'react-icons/bs';
import { chats } from '../../Api/chats';
import { Chat } from '../../models/Chat';
import { Profil } from '../../models/Profil';
import MessengerContact from '../MessengerContact/MessengerContact';


interface HeaderProps {
  iconType?:any
  pageTitle?:any
 
}


const Header : FC<HeaderProps> = () =>{

    const location = useLocation()


    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

    

  return (
      <div className="Header sticky-top d-flex justify-content-between align-items-center p-2">
          <div className="PageTitle">
      {
        location.pathname == '/' ?
        <h1>MudeyApp</h1>
        :
        location.pathname.startsWith('/message') ?
        <MessengerContact/>
       
        :
        location.pathname.startsWith('/userprofil') ?
        <h1>Profil</h1>
        :
        null
      }
          </div>



          {
            location.pathname == '/'?
            <div className="Icon">
            <BsThreeDotsVertical />
          </div>
            :
            <div className="Icon">
            <BsArrowLeft/>
          </div>
          }
         
      </div>
  );
}

export default Header;