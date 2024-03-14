/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/03/2024 15:18:26
*/
import React, { FC, useEffect, Fragment, useState } from "react";
// import Loading from '../Loading/Loading';
import "./Home.css";
import Header from "../../components/Header/Header";
import { User } from "../../models/User";
import { data } from "../../components/api/data";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  // const [state, setState] = useState<any>(null)
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    const runLocalData = async () => {
      console.log(data);
      data.map((dat: any) => {
        <li>{dat.name}</li>
      })

      setLoading(false);
    };
    
  });

  return (
    <Fragment>
      {
        <div className="container-sm ">
          <Header />
          <div className="discussion row">
            <div className="col-md-3">
               <img src="assets/images/_6073b1e3-6b7b-425a-b4b9-f6f881786cd5.jpeg" alt="" height={"10rem"} />
            </div>
            <div className="col-md-6">
              <h2>Name</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit...</p>
            </div>
            <div className="col-md-3 align-items-end" >
              17:00
            </div>
           

          </div>
         
         
        </div>
      }
    </Fragment>
  );
};

export default Home;
