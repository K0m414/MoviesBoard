import React, {useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import './css/DeleteMovie.css';
import Popup from './Popup';

const DeleteMovie = ({ id }) => {
    const [buttonPopup, setButtonPopup]=useState(false);
    const navigate =useNavigate()
    const handleDeleteMovie = () =>{
        axios.delete("http://localhost:3000/movies/"+id)
        .then(response => response.data)
        .catch(error => console.log(error))
        navigate('/')
    };

    return (
        <div>
            <button onClick={() => setButtonPopup(true)} type="button">Supprimer</button>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
                <h3>Êtes-vous sûre de vouloir supprimer ce film de la base de donnée ?</h3>
                <button data-id={id} onClick={handleDeleteMovie} type="button">Oui, supprimer</button>
            </Popup>
        </div>
        
    );
};

export default DeleteMovie;