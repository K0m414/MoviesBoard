import React, { useEffect, useState } from 'react'
import axios from 'axios';

// import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';

import './css/addMovie.css'
const AddMovie = () => {
    // API

    const apiUrlSearch = "https://api.themoviedb.org/3/search/movie?"
    const apiURL='https://api.themoviedb.org/3/movie/'
    const apiKey = 'api_key=1ce089df7bf505c569cf9ea998195d63'
    
    //recupérer les inputs
    const [searchTitle, setSearchTitle] = useState("");
    const [searchReleaseYear, setSearchReleaseYear] = useState("");

    // mesage d'erreur
    const [errorMessage, setErrorMessage] = useState('');

    // data
    const[movieDataDB, setMovieDataDB] = useState([]);
    const [actors, setActors] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [id, setId] = useState("");

    const [selectMovie, setSelectMovie] = useState({
        title: "",
        release_date: "",
        categories: [],
        description: "",
        poster: "",
        backdrop: "",
        id: "",
    });
    
    // Données envoyer au serveur mettre dans form ?
    const data = {
        title: selectMovie.title,
        release_date: selectMovie.release_date,
        categories: selectMovie.categories,
        description: selectMovie.description,
        poster: selectMovie.poster,
        backdrop: selectMovie.backdrop,
        actors: actors,
        similar_movies: similarMovies,
    };
    // fait la recherche ddans la base de donnée
    useEffect(() =>{
        if(searchTitle !== ""){
            axios.get(apiUrlSearch+apiKey+'&query='+searchTitle+'&primary_release_year='+searchReleaseYear)
            .then((response) =>
            setMovieDataDB(response.data.results))
            .catch((err) => setErrorMessage('Erreur serveur : Impossible de récupérer les films'));
        }
    }, [searchTitle,searchReleaseYear ]) // requête à chaque fois qu'une lettre et/ou une date est taper
    
    // récupère depuis la base de donnée les information sur le film selectionné
    useEffect(() =>{
        if(id !== ''){
            // étape 1 = récupérer les données la page du film
            axios.get(`${apiURL}${id}?${apiKey}`)
            .then((response) =>
            setSelectMovie({
                title: response.data.title,
                release_date: response.data.release_date,
                categories: response.data.genres.map( item =>  item.name),
                description: response.data.overview,
                poster: `https://image.tmdb.org/t/p/w342${response.data.poster_path}`,
                backdrop: `https://image.tmdb.org/t/p/w342${response.data.backdrop_path}`,
            }))
            .catch((err) => console.log(err));
        
        // console.log(selectMovie, similarMovies, actors )
            // étape 2 = récupérer les données sur la page "credits"
    axios.get(
            `${apiURL}${id}/credits?${apiKey}&language=en-US&page=1`
        )
        .then((response) => {
            const casts = response.data.cast.map(cast => {
                const newCast = {
                    name: cast.name,
                    photo: `https://image.tmdb.org/t/p/w342${cast.profile_path}`,
                    character: cast.character
                }
                return newCast;
            })
            setActors(casts);
            console.log(response.data.cast);
        })
        .catch((error) => console.log(error));

        // étape 3 = récupérer les données sur la page "similar"
        axios.get(
            `${apiURL}${id}/similar?${apiKey}&language=en-US&page=1`
        )
            .then((response) => {
            const res = [...response.data.results];
            const moviesToSend = res.map(movie => {
                const newMovie = {
                    title: movie.title,
                    poster: `https://image.tmdb.org/t/p/w342${movie.poster_path}`,
                    release_date: movie.release_date
                };
                return newMovie;
            });
                setSimilarMovies(moviesToSend);
        })
        .catch((error) => console.log(error));
    }}, [id]) // requête à chaque fois que id change
   
    //event

    const handleSearchTitle = (e) =>{ // recupère dans le input
        let value = e.target.value;
        setSearchTitle(value) // sa valeur est dans searchTitle
    };

    const handleSearchYear = (e) =>{ 
        let value = e.target.value;
        setSearchReleaseYear(value) 
    };

    const selectedMovie = (e) => {
        setId(e.target.dataset.id)
        console.log(id)
    };

    return (
        <main>
        <article className="content add-movie">
            <h2>Ajouter un film</h2>
            <section className="search">
                <p>{errorMessage}</p>{/* faire du style balise p? */}
                <input onInput = {handleSearchTitle}  list="input-search" placeholder= "Rechercher un film par titre" type='search' className='searchTitleInput'/>
                <input onInput = {handleSearchYear} type="text" className="searchDateInput" placeholder="Affinez votre recherche par année de sortie"/>
            </section>
            <section>
                <h3>Sélectionnez un film</h3>
                <ul >
                    {movieDataDB.map((movieData)=>{
                        // mettre image et date de sortie
                        return(
                            <li onClick={selectedMovie} key={movieData.id} data-id={movieData.id}>{movieData.title}</li>
                        ) 
                    })
                    }
                </ul>  
            </section>
                { data &&
                    <Form data={data} selectMovie={selectMovie} similarMovie={similarMovies} actors={actors} />
                }
        </article>
        </main>
    )
}
export default AddMovie;
