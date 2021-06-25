import React, {useState} from 'react';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar';
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
