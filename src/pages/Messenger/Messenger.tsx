/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 15/03/2024 11:06:19
*/
import React, { FC, useEffect,Fragment, useState } from 'react';
// import Loading from '../Loading/Loading';
import './Messenger.css';
import { Link, useParams } from 'react-router-dom';
import { chats } from '../../Api/chats';
import { Chat } from '../../models/Chat';
import { log } from 'util';
import Header from '../../components/Header/Header';
import { BsArrowBarLeft, BsArrowLeft } from 'react-icons/bs';
import MessageList from '../../components/MessageList/MessageList';
import ChatList from '../../components/ChatList/ChatList';


interface MessengerProps {
 
}


const Messenger : FC<MessengerProps> = () =>{


    // const [state, setState] = useState<any>(null)
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState('');
    let {slug} = useParams()
    let contact : Chat;
    if (slug) {
      contact = chats.filter((chat:Chat)=> chat._id === slug?.toString())[0]
     console.log(contact);
     
      
      
    }
    const Title = ()=>{
      return <div className='d-flex gap-2'>
        <img src={contact.imageUrl} alt={contact.participants[1].fullName} className='rounded-circle' height={40} width={40} />
        <div className="desc">
          <h2>{contact.participants[1].fullName}</h2>
          <p>En ligne</p>
        </div>
      </div>

    }
    

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
      <div className="Messenger">
         <Header iconType={<Link to={"/"}><BsArrowLeft/></Link>} pageTitle={Title()} />
         <ChatList lastMessage={contact!.lastMessage} />
      </div>
    }
    </Fragment>
  );
}

export default Messenger;