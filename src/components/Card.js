import React from 'react'
import { Link } from 'react-router-dom';
import "./css/card.css"

const Card = ( { movie } )=> {
    //const movieId = movie.id;
     //console.log(movieId)
    
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
                            <div className="poster">
                                <img src={movie.poster} alt= {"affiche de "+movie.title}/>
                            </div>
                        </div>

                        <div className="half">
                            <div className="release_date">
                                <h3>date de sortie : </h3> 
                                <time>{movie.release_date}</time>
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
                        <button type="button">modifier</button>
                        <button type="button">supprimer</button>
                    </div>
                </div>
            )}
        </article>
    )
    
    };

export default Card
