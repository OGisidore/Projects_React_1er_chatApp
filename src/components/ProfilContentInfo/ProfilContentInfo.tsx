/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 17/03/2024 10:51:45
*/
import React, { FC, useEffect } from 'react';
import './ProfilContentInfo.css';
import { BsPencilFill } from 'react-icons/bs';


interface ProfilContentInfoProps {
  iconType : any;
  content: any
  isWritable:boolean
 
}


const ProfilContentInfo : FC<ProfilContentInfoProps> = ({iconType,content,isWritable}) =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="ProfilContentInfo d-flex justify-content-between border-bottom p-2 align-items-center">
          <div className="infoContent d-flex align-items-center">
            {iconType}
            <p> {content}</p>
          </div>
          {isWritable && <BsPencilFill/>}
      </div>
  );
}

export default ProfilContentInfo;