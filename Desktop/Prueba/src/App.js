
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import SideBar from './components/Sidebar/Index';
import Herocontainer from './components/HeroSection/index';
import InfoSection from './components/InfoSection';
import { homeObjOne,homeObjTwo,homeObjThree,homeObjFour } from './components/InfoSection/Data';
import React from 'react';
import Services from './components/Services';
import Footer from './components/Footer/index';




  
function App() {
  return (
    
    <Router>
           <SideBar />
     <Navbar/>
    <Herocontainer/>
    <InfoSection {...homeObjOne}   />
    <InfoSection {...homeObjTwo}   />
    <Services/>
    <InfoSection {...homeObjThree}   />
    <InfoSection {...homeObjFour}   />
    <Footer/>
        
   </Router>
  );
  }

 

export default App;
 