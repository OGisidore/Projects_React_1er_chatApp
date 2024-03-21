/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 15/03/2024 11:09:42
*/
import React, { FC, useEffect, useState } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { BsArrowLeft, BsThreeDotsVertical } from 'react-icons/bs';

import MessengerContact from '../MessengerContact/MessengerContact';
import NavBar from '../NavBar/NavBar';


interface HeaderProps {
  iconType?:any
  pageTitle?:any
 
}


const Header : FC<HeaderProps> = () =>{
  const [displayNav , setDisplayNav]= useState<boolean>(false)

    const location = useLocation()
    const handledisplayNavBar = ()=>{
      setDisplayNav(true)
    }


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
        location.pathname.startsWith('/contact') ?
        <h1>Contacts</h1>
        :
        location.pathname.startsWith('/login') ?
        <h1>Login</h1>
        : null
      }
          </div>

          

          {
            location.pathname == '/'?
            <div className="Icon">
            <BsThreeDotsVertical onClick={handledisplayNavBar} />
          </div>
            :
            <div className="Icon">
              <Link to={"/"}>
                <BsArrowLeft/>
              </Link>
            
          </div>
          }
          {location.pathname == '/' && displayNav && <NavBar hideModal={()=>setDisplayNav(false)}/>}
         
      </div>
  );
}

export default Header;