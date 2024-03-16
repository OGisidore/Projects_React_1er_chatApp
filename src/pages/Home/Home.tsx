/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 15/03/2024 11:06:19
*/
import React, { FC, useEffect, useState,  } from 'react';
// import Loading from '../Loading/Loading';
import './Home.css';
import Header from '../../components/Header/Header';
import { BsThreeDotsVertical } from 'react-icons/bs';
import NavBar from '../../components/NavBar/NavBar';
import MessageList from '../../components/MessageList/MessageList';


interface HomeProps {
 
}


const Home : FC<HomeProps> = () =>{


    // const [state, setState] = useState<any>(null)
    const [displayNav, setDisplayNav] = useState<boolean>(false);
    const handledisplayNavBar = ()=>{
      console.log("hello");
      
      setDisplayNav(true)
    }
   
    const icon = ()=>{
      return(
          <BsThreeDotsVertical onClick={handledisplayNavBar}/>
      )
    }

    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {
     //console.log({usersInfo});

        // setLoading(false)
      }
      runLocalData()
    },[])

  return (
    <div className="home">
      <Header iconType={icon()} pageTitle={"MudeyApp"}/>
   <div className="content">
    {displayNav && <NavBar hideModal={()=>setDisplayNav(false)}/>}
   
   </div>
    <MessageList/>
    </div>
   
   
  
    
  );
}

export default Home;