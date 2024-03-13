/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/03/2024 15:18:26
*/
import React, { FC, useEffect,Fragment, useState } from 'react';
// import Loading from '../Loading/Loading';
import './Profil.css';


interface ProfilProps {
 
}


const Profil : FC<ProfilProps> = () =>{


    // const [state, setState] = useState<any>(null)
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState('');

    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

        setLoading(false)
      }
      runLocalData()
    },[value])

  return (
    <Fragment>
    {
     
      <div className="Profil">
          Profil Component
      </div>
    }
    </Fragment>
  );
}

export default Profil;