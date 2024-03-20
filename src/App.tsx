import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contacts from './pages/Contacts/Contacts';
import UserProfil from './pages/UserProfil/UserProfil';
import Login from './pages/Login/Login';
import Messenger from './pages/Messenger/Messenger';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
    
    <Header/>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path='/contact' element={<Contacts/>}/>
         <Route path='/userprofil/:slug' element={<UserProfil/>}/>
       / <Route path='/message/:slug' element={<Messenger/>}/> 
        <Route path='/login' element={<Login/>}/>  
        {/* <Route path='/reader/:slug' element={<ChatBox/>}/>
         <Route path ='/*' element={<ErrorPage/>}/> */}


       

      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
