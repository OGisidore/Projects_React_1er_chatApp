/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/03/2024 16:18:59
*/
import React, { FC, useEffect } from 'react';
import './NavModal.css';


interface NavModalProps {
 
}


const NavModal : FC<NavModalProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="NavModal">
          NavModal Component
      </div>
  );
}

export default NavModal;