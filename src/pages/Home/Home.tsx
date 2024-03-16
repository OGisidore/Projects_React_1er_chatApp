/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 15/03/2024 11:06:19
*/
import React, { FC, useEffect,  } from 'react';
// import Loading from '../Loading/Loading';
import './Home.css';
import Header from '../../components/Header/Header';


interface HomeProps {
 
}


const Home : FC<HomeProps> = () =>{


    // const [state, setState] = useState<any>(null)
    // const [loading, setLoading] = useState(true);
   
    const icon = ()=>{
      return(
        <div>
          <BsC
        three dot</div>
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
   
   <Header iconType={icon()} pageTitle={"MudeyApp"}/>
    
  );
}

export default Home;