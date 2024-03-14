/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/03/2024 15:18:26
*/
import React, { FC, useEffect,Fragment, useState } from 'react';
// import Loading from '../Loading/Loading';
import './Contact.css';
import GenericsHeader from '../../components/GenericsHeader/GenericsHeader';
import { data } from '../../components/api/data';


interface ContactProps {
 
}


const Contact : FC<ContactProps> = () =>{


    // const [state, setState] = useState<any>(null)
    const [loading, setLoading] = useState(true);
    const title: string = "Contact"

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
      <div className="Contact">
        <GenericsHeader headerTitle={title}/>
        
        {
            data.map((dat: any,index : number) => {
              
              
              return (
                <div className="discussion pt-1 border-bottom d-flex" key={index}>
                <div className=" mx-2">
                   <img src={dat.profilImage} alt={dat.name} className="rounded-circle" height={"60px"} />
                </div>
                <div className=" d-flex flex-column justify-content-end">
                  <h2>{dat.name}</h2>
                  <p>{dat.onLine}</p>
                </div>
                <div className=" p-3 d-flex align-items-end" >
                  {dat.message.time}
                </div>
               
      
              </div>
              )
              
              
            })
            
          }
      </div>
    }
    </Fragment>
  );
}

export default Contact;