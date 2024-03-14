/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/03/2024 15:18:26
*/
import React, { FC, useEffect, Fragment, useState } from 'react';
// import Loading from '../Loading/Loading';
import './Profil.css';
import GenericsHeader from '../../components/GenericsHeader/GenericsHeader';
import { user } from '../../components/api/user';
import { BsCameraFill, BsChatSquareFill, BsInfoCircleFill, BsPencilFill, BsPersonFill, BsTelephoneFill } from 'react-icons/bs';


interface ProfilProps {

}


const Profil: FC<ProfilProps> = () => {


  // const [state, setState] = useState<any>(null)
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState('');
  const title: string = "Profil"

  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

      setLoading(false)
    }
    runLocalData()
  }, [value])

  return (
    <Fragment>
      {

        <div className="Profil container-sm">
          <GenericsHeader
          
            headerTitle={title} />
          

          <div className="contents">

            <div className="profilUser d-flex border justify-content-center align-items-center relative">
              <div className="cameraAndImage">
                <img src={user.profilImage} alt={user.name} height={"200px"} className='rounded-circle' />
                <div className="camera rounded-circle d-flex justify-content-center align-items-center">
                  <BsCameraFill />
                </div>
              </div>
            </div>

            <div className="infos">
              <div className="name d-flex justify-content-between border-bottom  p-2 align-items-center">
                <div className="nameText d-flex  align-items-center">
                  <BsPersonFill/> 
                  <p>{user.name} {user.surname}</p>
                </div>
                <BsPencilFill/>
                
              </div>
              <div className="name d-flex justify-content-between border-bottom  p-2 align-items-center">
                <div className="nameText d-flex  align-items-center">
                  <BsChatSquareFill/> 
                  <p>{user.mail}</p>
                </div>
                <BsPencilFill/>
                
              </div>
              <div className="name d-flex justify-content-between border-bottom  p-2 align-items-center">
                <div className="nameText d-flex  align-items-center">
                  <BsInfoCircleFill/> 
                  <p>{user.info}</p>
                </div>
                <BsPencilFill/>
                
              </div>
              <div className="name d-flex justify-content-between border-bottom p-2 align-items-center">
                <div className="nameText d-flex  align-items-center">
                  <BsTelephoneFill/> 
                  <p>{user.tel}</p>
                </div>
                <BsPencilFill/>
                
              </div>
            </div>

             
          </div>

        </div>
      }
    </Fragment>
  );
}

export default Profil;