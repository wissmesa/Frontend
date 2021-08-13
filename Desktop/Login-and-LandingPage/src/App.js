
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import SideBar from './components/Sidebar/Index';
import Herocontainer from './components/HeroSection/index';
import InfoSection from './components/InfoSection';
import { homeObjOne,homeObjTwo,homeObjThree,homeObjFour } from './components/InfoSection/Data';
import React from 'react';
import Services from './components/Services';
import Footer from './components/Footer/index';
import SigninPage from './components/Signin/Index';
import Home from './pages';
import {
 
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    
    <Router>
      <SideBar />
      <Navbar/>
        <Switch>
          <Route exact path="/"> 
              <Herocontainer/>
              <InfoSection {...homeObjOne}/>
              <InfoSection {...homeObjTwo}/>
              <Services/>
              <InfoSection {...homeObjThree}/>
              <InfoSection {...homeObjFour}/> 
              <Footer/>
          </Route>
         
          <Route path="/signin">
            <SigninPage/>
           
         
         </Route>
        </Switch>
          
   </Router>
  );
  }


 



export default App;
 