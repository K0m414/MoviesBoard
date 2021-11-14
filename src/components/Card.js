import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';

import DateServices from '../services/DateServices';
import "./css/Card.css"

const Card = ( { movie } )=> {
    
     const handleDeleteMovie = (e) => {
         const movieId = e.target.dataset.id;
         console.log(movieId)
         axios.delete("http://localhost:3000/movies/"+movieId)
        .then(response => response.data)
        .catch(error => console.log(error))
    }

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
                                <h3>date de sortie : </h3> 
                                <time>{DateServices.LocalDate(movie.release_date)}</time>
                            </div>
                            <div className="description">
                                <h3>synopsis : </h3>
                                <p>{movie.description}</p>
                            </div> 
                        </div>
                    </div>
                    </Link>
                    
                    <div className="buttons">
                        <button type="button" className="button-plus">en savoir plus</button>
                        <Link to={"/EditMovie/"+movie.id}>
                            <button type="button">modifier</button>
                        </Link>
                        <Link to={"/"}>
                            <button data-id={movie.id} onClick={handleDeleteMovie} type="button">supprimer</button>
                        </Link>
                    </div>
                </div>
            )}
        </article>
    )
    
    };

export default Card
