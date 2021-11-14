import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

import DateServices from '../services/DateServices';
import DeleteMovie from '../components/DeleteMovie';
import NotFound from './NotFound';

import './css/MovieDetail.css'

const MovieDetail = () => {
    const[movieData, setMovieData] = useState([]);
    const { id } = useParams();
    const URL = 'http://localhost:3000/movies/';
    
    useEffect(() => {
        axios.get(URL+id)
        .then((response) => setMovieData(response.data))
        .catch((err) => console.log(err))},
         [id])

        // console.log(movieData.length === undefined);
    return (
        <main>
            <section className="content">
                {movieData.length !== undefined &&
                    <NotFound />
                }
                {movieData.length === undefined && (
                    <article className="detail-movie">
                        
                        <section className="main-detail">
                            <h2>{ movieData.title }</h2>
                            <img src={ movieData.poster } alt={`Affiche du film ${movieData.title}`} />
                            <p>Date de sortie : <time>{DateServices.LocalDate(movieData.release_date)}</time></p>
                        </section>

                        <section className="secondary-detail">
                        <h3>Catégories : </h3>
                        <ul className="categories-list"> 
                            { movieData.categories.map(( category, index) =>
                            <li key={index} className="category">
                                { `${category},`}
                            </li>                        
                            ) }
                        </ul>
                        <h3>Description : </h3>
                        <p>{ movieData.description }</p>
                        <h3>Acteurs principaux  : </h3>
                        <ul className="actors-list">
                            { movieData.actors.map(({ character, name, photo }, index) => (                            
                                <li key={ index } className="actor-details">
                                    <ul className="actor-list">
                                        <li>
                                            <img src={ photo } alt={ name }  className="actor-photo"/>
                                        </li>
                                        <li>
                                            { character } joué par { name }
                                        </li>
                                    </ul>
                                </li>
                            ))}
                        </ul>
                        <h3>Films similaires : </h3>
                        <ul className="similar-movies-list">
                            { movieData.similar_movies.map(({ title, poster, release_date }, index)  => (
                                <li key={ index } className="actor-details">
                                <ul className="similar-movie-list">
                                    <li>
                                        <img src={ poster } alt={ 'Affiche du film'+title }  className="actor-photo"/>
                                    </li>
                                    <li>
                                        { title } sortie le { release_date }
                                    </li>
                                </ul>
                            </li>
                            ))}
                        </ul>
                        <div>
                            <div className="buttons">
                                <Link to={"/EditMovie/"+id}>
                                    <button type="button">modifier</button>
                                </Link>
                                <DeleteMovie id={id}/>
                            </div>
                        </div>    
                        </section>
                        
                    </article>
                )}
            </section>
        </main>
    )
}

export default MovieDetail
