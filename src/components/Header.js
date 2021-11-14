import React from 'react';
import { NavLink } from "react-router-dom"
import "./css/Header.css"

function Header(){
    return(
        <header>
            <h1><a href="/"> Movies Board</a></h1>
            <nav>
                <ul className="navbar">
                    <li>
                        <NavLink to="/">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/AddMovie">Ajouter</NavLink>
                    </li> 
                </ul>
        </nav>
        </header>
    )
}

export default Header;