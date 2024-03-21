/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 15/03/2024 11:06:19
*/
import React, { FC, useEffect,Fragment, useState } from 'react';
// import Loading from '../Loading/Loading';
import './UserProfil.css';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { BsArrowLeft } from 'react-icons/bs';
import { Profil } from '../../models/Profil';
import { profils } from '../../Api/profils';
import ProfilContent from '../../components/ProfilContent/ProfilContent';
import { users } from '../../Api/users';
import { User } from '../../models/User';


interface UserProfilProps {
 
}


const UserProfil : FC<UserProfilProps> = () =>{


    // const [state, setState] = useState<any>(null)
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState('');
    const {slug} = useParams()
    console.log(slug);
    let profil : Profil;
    if (slug) {
      profil = users.filter((profil :User)=> profil._id === slug)[0].profile
      console.log({profil});
      
      
    }
    

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
      
      <div className="UserProfil">
          <ProfilContent Userprofil={profil!}/>
      </div>
    }
    </Fragment>
  );
}

export default UserProfil;