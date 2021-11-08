import React from 'react';
import { NavLink } from "react-router-dom"
import "./css/Header.css"

function Header(){
    return(
        <nav>
            <ul className="navbar">
            
                <li>
                    <NavLink exact to="/" activeClassName="nav-active">Accueil</NavLink>
                </li>
                <li>
                    <NavLink exact to="/AddMovie" activeClassName="nav-active">Ajouter</NavLink>
                </li> 

            </ul>
        </nav>
        
        
    )
}

export default Header;