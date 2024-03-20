/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 15/03/2024 11:06:19
*/
import React, { FC, useEffect,Fragment, useState } from 'react';
// import Loading from '../Loading/Lo
import ContactList from '../../components/ContactList/ContactList';


interface ContactsProps {
 
}


const Contacts : FC<ContactsProps> = () =>{


    // const [state, setState] = useState<any>(null)
    const [loading, setLoading] = useState(true);
   
    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

        setLoading(false)
      }
      runLocalData()
    },[])

    
    

  return (
    <Fragment>
    {
      <div className="Contacts">
        
          <ContactList/>
      </div>
    }
    </Fragment>
  );
}

export default Contacts;