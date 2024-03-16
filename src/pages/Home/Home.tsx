/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 15/03/2024 11:06:19
*/
import React, { FC, useEffect,Fragment, useState } from 'react';
// import Loading from '../Loading/Loading';
import './Home.css';
import { usersInfo } from '../../Api/profils';


interface HomeProps {
 
}


const Home : FC<HomeProps> = () =>{


    // const [state, setState] = useState<any>(null)
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState('');

    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {
     console.log({usersInfo});

        setLoading(false)
      }
      runLocalData()
    },[value])

  return (
    <Fragment>
    {
     
  
      <div className="Home">
          Home Component
      </div>
    }
    </Fragment>
  );
}

export default Home;