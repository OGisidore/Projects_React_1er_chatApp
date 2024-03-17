/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 16/03/2024 11:50:12
*/
import React, { FC, useEffect } from 'react';
import './NavBar.css';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { users } from '../../Api/users';


interface NavBarProps {
  hideModal:()=>void
 
}


const NavBar : FC<NavBarProps> = ({hideModal}) =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="NavBar">
       
         <Modal  show={true} className='modalnav'>
          <Modal.Header>
          <button onClick={hideModal} className='btn btn-close'></button>
          </Modal.Header>
          <Modal.Body>
            <nav>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                </li>
                <li className='nav-item'>
                <Link className="nav-link active" aria-current="page" to={"/userprofil/" + users[0]._id}>Profil</Link>
                </li>
                <li className='nav-item'>
                <Link className="nav-link active" aria-current="page" to="/login">Log out</Link>
                </li> 
              </ul>
            </nav>
          </Modal.Body>
         </Modal>
      </div>
  );
}

export default NavBar;