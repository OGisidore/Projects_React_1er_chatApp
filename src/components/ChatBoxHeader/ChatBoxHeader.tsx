/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 14/03/2024 16:26:10
*/
import React, { FC, useEffect } from 'react';
import './ChatBoxHeader.css';
import { BsArrowLeftShort, BsDot } from 'react-icons/bs';


interface ChatBoxHeaderProps {
  userData: any

}


const ChatBoxHeader: FC<ChatBoxHeaderProps> = ({ userData }) => {



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className="ChatBoxHeader">

      <div className="Header d-flex p-2  sticky-top justify-content-between align-items-center">
        <div className="logo d-flex">
          <div className="mx-3">
            <img src={userData.profilImage} alt={userData.name} className="rounded-circle" height={"60px"} />
          </div>
          <div className=" d-flex flex-column justify-content-end">
            <h2>{userData.name}</h2>
            <p className={userData.onLine ? "online" : ""}> <BsDot />{userData.onLine ? "En ligne" : "hors ligne"}</p>
          </div>
        </div>
        <div className="bars d-flex align-items-center">
          <BsArrowLeftShort />
        </div>

      </div>

    </div>
  );
}

export default ChatBoxHeader;