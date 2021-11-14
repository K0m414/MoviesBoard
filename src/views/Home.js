import React, { useEffect, useState } from 'react';
import './css/home.css';
import axios from 'axios';
import Card from '../components/Card';
import MovieDataService from '../services/MovieDataService';

const Home = () => {
    const [movieData, setMovieData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [searchTitle, setSearchTitle] = useState('');

    const URL = "http://localhost:3000/movies";
    
    useEffect(() =>{// se déclenche au chargement de la page 1 fois
        axios.get(URL)// recupere données de l'api
        .then((response) =>setMovieData(response.data))
            .catch((err) => setErrorMessage('Erreur serveur : Impossible de récupérer les films'));
        }, [])
        const handleClick = (e) => {
            e.preventDefault()
                console.log('j')
                // MovieDataService.searchMovie(title).then(response => setMovieData(response.data));
                let queryParams = [];
                if (searchTitle && searchTitle !== '') {
                    queryParams.push(`title_like=${searchTitle}`);
                }
                // if (category && category !== '') {
                //     queryParams.push(`categories_like=${category}`);
                // }

                axios.get(URL+'?'+queryParams)
                .then(response => setMovieData(response.data))
                .catch(error => console.log(error))
            }
            const handleChangeSearchTitle = (e) => {
                let value = e.target.value
                console.log(value)
                setSearchTitle(value)
                }
            
       
    return (
        <main className="home-page">
            <section className="content">
                <form className="search">
                    <input onChange={handleChangeSearchTitle} type="text" className="searchTitleInput" value={searchTitle} placeholder="Recherchez des films"/>
                    {/* <select onchage name="filter" className="filter">
                        <option value="">filtrez par</option>
                        <option value="title">titre</option>
                        <option value="date">date de sortie</option>
                        <option value="category">catégories</option>
                    </select> */}
                    <button onClick={handleClick} className="search-button">recherchez</button>
                </form>
                {/* faire du style balise p? */}
                <p>{errorMessage}</p>
                {movieData &&
                    <div className="card-container">
                        
                        {movieData.map(movie => {
                                return(
                                    <Card movie={ movie } key={ movie.id }  />
                                ) 
                            }
                        )} 
                    </div>   
                } 
            </section>
        </main>
    );
};

export default Home;