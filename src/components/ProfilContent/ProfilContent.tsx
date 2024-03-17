/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 15/03/2024 11:09:42
*/
import React, { FC, useEffect } from 'react';
import './ProfilContent.css';
import { Profil } from '../../models/Profil';
import { BsCameraFill, BsChatSquareFill, BsInfoCircleFill, BsPersonFill, BsTelephoneFill } from 'react-icons/bs';
import ProfilContentInfo from '../ProfilContentInfo/ProfilContentInfo';
import UserProfil from '../../pages/UserProfil/UserProfil';


interface ProfilContentProps {
  Userprofil:Profil
 
}


const ProfilContent : FC<ProfilContentProps> = ({Userprofil}) =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="ProfilContent">
          <div className="profilUser d-flex border justify-content-center align-items-center relative">
            <div className="cameraAndImage relative rounded-circle">
              <img src={Userprofil.picture} height={"150px"} width={"150px"} alt="" className="rounded-circle" />
              {
                Userprofil.isUser &&  <div className="camera p-2 absolute rounded-circle d-flex justify-content-center align-items-center"><BsCameraFill/></div>
              }
             
            </div>
          
          </div>
            <div className="infos">
              <ProfilContentInfo content={Userprofil.fullName} iconType={<BsPersonFill/>} isWritable={ Userprofil.isUser? true:false}/>
              <ProfilContentInfo content={Userprofil.email} iconType={<BsChatSquareFill/>} isWritable={ Userprofil.isUser? true:false}/>
              <ProfilContentInfo content={Userprofil.function} iconType={<BsInfoCircleFill/>} isWritable={ Userprofil.isUser? true:false}/>
              <ProfilContentInfo content={Userprofil.phone} iconType={<BsTelephoneFill/>} isWritable={ Userprofil.isUser? true:false}/>
            </div>
      </div>
  );
}

export default ProfilContent;