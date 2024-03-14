/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/03/2024 15:23:30
*/
import React, { FC, useEffect } from 'react';
import './Header.css';
import { BsThreeDotsVertical } from "react-icons/bs";


interface HeaderProps {
 
}


const Header : FC<HeaderProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="Header d-flex p-2 justify-content-between">
        <div className="logo">MudeyApp</div>
        <i className="bi-alarm" style={{fontSize: '2rem', color: 'cornflowerblue'}} />
        <BsThreeDotsVertical /> 
      </div>
  );
}

export default Header;