/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/03/2024 15:23:57
*/
import React, { FC, useEffect } from 'react';
import './GenericsHeader.css';


interface GenericsHeaderProps {
 
}


const GenericsHeader : FC<GenericsHeaderProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="GenericsHeader">
          GenericsHeader Component
      </div>
  );
}

export default GenericsHeader;