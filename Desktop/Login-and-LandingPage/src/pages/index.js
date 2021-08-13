import React, {useState} from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar';
import {BrowserRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SigninPage from './signin';
import Sidebar from '../components/Sidebar/Index'

const Home = () => {
    const [isOpen, setIsOpen]   = useState(false)
    const toggle = () =>{
        setIsOpen (!isOpen);
    };
   
    return ( 
        <>
       
           <Sidebar isOpen={isOpen} toggle= {toggle}/> 
           <Navbar toggle={toggle}/>
           <InfoSection/>
         
        </>
    );
    
};

export default Home
