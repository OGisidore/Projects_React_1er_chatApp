/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/03/2024 15:23:57
*/
import React, { FC, useEffect } from 'react';
import './GenericsHeader.css';
import { BsArrowLeftShort } from 'react-icons/bs';


interface GenericsHeaderProps {
  headerTitle:any
 
}


const GenericsHeader : FC<GenericsHeaderProps> = ({headerTitle}) =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="GenericsHeader">
          <div className="Header d-flex p-2  sticky-top justify-content-between align-items-center">
        <div className="logo"><h1>{headerTitle}</h1></div>
        <div className="bars d-flex align-items-center">
          <BsArrowLeftShort />
        </div>
         
      </div>
      </div>
  );
}

export default GenericsHeader;