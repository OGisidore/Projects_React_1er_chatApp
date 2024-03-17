/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 15/03/2024 11:06:19
*/
import React, { FC, useEffect,Fragment, useState } from 'react';
// import Loading from '../Loading/Loading';
import './Login.css';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import LoginForm from '../../components/LoginForm/LoginForm';


interface LoginProps {
 
}


const Login : FC<LoginProps> = () =>{


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
      <div className="Login">
          <Header iconType={<Link to={"/"}><BsArrowLeft/></Link>} pageTitle={"Login"} />
          <LoginForm/>
      </div>
    }
    </Fragment>
  );
}

export default Login;