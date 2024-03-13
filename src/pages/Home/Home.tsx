/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/03/2024 15:18:26
*/
import React, { FC, useEffect,Fragment, useState } from 'react';
// import Loading from '../Loading/Loading';
import './Home.css';
import Header from '../../components/Header/Header';


interface HomeProps {
 
}


const Home : FC<HomeProps> = () =>{


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
     <div className="container-sm  ">
      <Header/>

     </div>

    }
    </Fragment>
  );
}

export default Home;