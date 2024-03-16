/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 15/03/2024 11:09:42
*/
import React, { FC, useEffect } from 'react';
import './Header.css';


interface HeaderProps {
  iconType:any
  pageTitle:any
 
}


const Header : FC<HeaderProps> = ({iconType,pageTitle}) =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="Header sticky-top d-flex justify-content-between align-items-center p-2">
          <div className="PageTitle">

            {typeof pageTitle === 'string'?
            <h2>{pageTitle}</h2>:
            pageTitle}
          </div>
          <div className="Icon">
            {iconType}
          </div>
      </div>
  );
}

export default Header;