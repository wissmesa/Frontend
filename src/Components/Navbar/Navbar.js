import React, { Component } from 'react';
import {MenuItems} from "./MenuItems"
import './Navbar.css'
import {Button} from "../Button"


class Navbar extends  React.Component {
   state = { clicked: false   }
   
   handleclick = () => {
    this.setState ({clicked: !this.state.clicked})

   }
   
    render (){
        return (

            <nav className="NavbarItems">
                <h1 className="navbar-logo"> EzZoom </h1>
                <div className="menu-icon" onClick={this.handleclick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} ></i>
                    
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}
                >
                    {MenuItems.map  ((item,index)  => {
                        return (
                            <li key={index}><a 
                            className={item.cName} 
                            href={item.url}>
                            
                            <div>{item.tittle} </div>
                            </a>
                         </li>




                             )
                        })}
                
                </ul>
                <Button >Sign up / Login</Button>
            </nav>


        )



    }
}


export default Navbar