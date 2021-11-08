import React, { useEffect, useState } from 'react';
import './css/style.css';
import axios from 'axios';
import Card from '../components/Card';

const Home = () => {
    const[movieData, setMovieData] = useState([]);
    const [errorData, setErrorData] = useState(false);

    const URL = "http://localhost:3000/movies"

    useEffect(() =>{// se déclenche au chargement de la page 1 fois
        axios.get(URL)// recupere données de l'api
        .then((response) =>setMovieData(response.data))
            .catch(e => { // attrape erreur au niveau de l'echange entre l'api et le site
                setErrorData(true) //si il y a une erreur alors changement de l'état l'erreur en true 
                console.log('erreur')});
        }, [])
        console.log(movieData)
    return (
        <main className="main-content">
            <div className="content" >
                <form>
                    <input type="text"/>
                    <select name="filtre">
                        <option value="">--Please choose an option--</option>
                        <option value="title">titre</option>
                        <option value="date">date de sortie</option>
                        <option value="category">catégories</option>
                    </select>
                    <button>rechercher</button>
                </form>
                {movieData &&
                <div className="container">
                    <Card movieData={movieData}  />
                <Card movieData={movieData}  />
                <Card movieData={movieData}  />
                <Card movieData={movieData}  />
                <Card movieData={movieData}  />
                <Card movieData={movieData}  />
                </div>
                
        }
                
            </div>
        </main>
    );
};

export default Home;