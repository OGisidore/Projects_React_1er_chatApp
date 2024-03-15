/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/03/2024 15:23:30
*/
import React, { FC, useEffect, useState } from 'react';
import './Header.css';
import { BsThreeDotsVertical } from "react-icons/bs";
import NavModal from '../NavModal/NavModal';


interface HeaderProps {
 
}


const Header : FC<HeaderProps> = () =>{
  const [displayNav, setDisplayNav] = useState<boolean>(false)
  const showNav = ()=>{
    setDisplayNav(true)
  }



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="Header d-flex p-2 sticky-top justify-content-between align-items-center">
        <div className="logo"><h1>MudeyApp</h1></div>
        <div className="bars d-flex align-items-center" onClick={showNav}>
          <BsThreeDotsVertical />
        </div>
        {displayNav && <NavModal/>}
         
      </div>
  );
}

export default Header;