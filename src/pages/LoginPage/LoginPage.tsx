/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 14/03/2024 13:46:08
*/
import React, { FC, useEffect, Fragment, useState } from 'react';
// import Loading from '../Loading/Loading';
import './LoginPage.css';
import GenericsHeader from '../../components/GenericsHeader/GenericsHeader';


interface LoginPageProps {

}


const LoginPage: FC<LoginPageProps> = () => {


  // const [state, setState] = useState<any>(null)
  const [loading, setLoading] = useState(true);
  const title: string = "Login"


  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

      setLoading(false)
    }
    runLocalData()
  }, [])

  return (
    <Fragment>


      <div className="LoginPage">
        <GenericsHeader headerTitle={title} />
        <div className="content">
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email </label>
              <input type="email" className="form-control p-3" id="emailAddress" placeholder='Your email address' aria-describedby="emailHelp" />
              
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control p-3 " placeholder='Your password' id="password" />
            </div>
            <button type="submit" className="btn btn-primary  p-3 form-control">Login</button>
          </form>

        </div>
      </div>

    </Fragment>
  );
}

export default LoginPage;