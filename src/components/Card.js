import React from 'react'
import { Link } from 'react-router-dom';

import DateServices from '../services/DateServices';
import DeleteMovie from './DeleteMovie';


import "./css/Card.css";

const Card = ( { movie } )=> {

    return(
        <article className="card-list">
            {movie && (
                <div className="card">

                    <Link to={"/MovieDetail/"+movie.id}>
                    <div className="card_body">
                        <div className="half">
                            <div className="featured_text">
                                <h2>{movie.title}</h2>
                            </div>
                            <div>
                                <img src={movie.poster} alt= {"affiche de "+movie.title}/>
                            </div>
                        </div>

                        <div className="half">
                            <div className="release_date">
                                <h3>Date de sortie : </h3> 
                                <time>{DateServices.LocalDate(movie.release_date)}</time>
                            </div>
                            <div className="description">
                                <h3>Synopsis : </h3>
                                <p>{movie.description}</p>
                            </div> 
                        </div>
                    </div>
                    </Link>
                    
                    <div className="buttons">
                        <Link to={"/MovieDetail/"+movie.id}>
                            <button type="button" className="button-plus">En savoir plus</button>
                        </Link>
                        <Link to={"/EditMovie/"+movie.id}>
                            <button type="button">Modifier</button>
                        </Link>
                            <DeleteMovie id={ movie.id }/>

                            {/* <button data-id={movie.id} onClick={() =>{
                if (window.confirm('Le film sera retiré de votre bibliothèque ! Confirmer la suppression ?')) {
                    handleDeleteMovie();
                }
                }} type="button">supprimer</button>
                        
                        
                        <button onClick={() => setButtonPopup(true)} type="button">Supprimer</button>

                        <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
                            <h3>Êtes-vous sûre de vouloir supprimer ce film de la base de donnée ?</h3>
                            <button data-id={movie.id} onClick={handleDeleteMovie} type="button">Oui, supprimer</button>
                        </Popup> */}
                    </div>
                </div>
            )}
        </article>
    )
    
    };

export default Card
