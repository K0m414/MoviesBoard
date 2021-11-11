import React, { useEffect, useState } from 'react';
import './css/style.css';
import './css/home.css';
import axios from 'axios';
import Card from '../components/Card';

const Home = () => {
    const [movieData, setMovieData] = useState([]);
    const [errorData, setErrorMessage] = useState('');

    const URL = "http://localhost:3000/movies"

    useEffect(() =>{// se déclenche au chargement de la page 1 fois
        axios.get(URL)// recupere données de l'api
        .then((response) =>setMovieData(response.data))
            .catch((err) => setErrorMessage('Erreur serveur : Impossible de récupérer les films'));
        }, [])

    return (
        <main className="main-content">
            <div className="content" >
                <form className="search">
                    <input type="text" className="searchTitleInput" placeholder="Recherchez des films"/>
                    <select name="filter" className="filter">
                        <option value="">filtrez par</option>
                        <option value="title">titre</option>
                        <option value="date">date de sortie</option>
                        <option value="category">catégories</option>
                    </select>
                    <button className="search-button">recherchez</button>
                </form>
                {movieData &&
                <div className="container">
                    <p>{errorData}</p>
                    {/* faire du style balise p? */}
                    {movieData.map(movie => {
                            return(
                                <Card movie={ movie } key={ movie.id }  />
                            ) 
                        }
                    
                    )}
                    {movieData.map(movie => {
                            return(
                                <Card movie={ movie } key={ movie.id }  />
                            ) 
                        }
                    
                    )}
                    
                </div>
                
        }
                
            </div>
        </main>
    );
};

export default Home;