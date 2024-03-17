/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 15/03/2024 11:09:42
*/
import React, { FC, useEffect } from 'react';
import './LoginForm.css';


interface LoginFormProps {
 
}


const LoginForm : FC<LoginFormProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="LoginForm d-flex align-items-center p-2">
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
  );
}

export default LoginForm;