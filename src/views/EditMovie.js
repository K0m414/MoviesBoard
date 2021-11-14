import React, {useState, useEffect } from 'react';
import MovieEditForm from '../components/MovieEditForm';
import { useParams } from 'react-router';
import axios from 'axios';

import './css/EditMovie.css'
import NotFound from './NotFound';

function EditMovie() {
    const { id } = useParams();
    const [movie, setMovie] = useState('');
    

    useEffect(() => {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then((response) => setMovie(response.data))
            .catch(error => console.log(error))
            // console.log(movie)
    }, [id]);
    
    return (
        
        <main>
            <article className="content edit-movie">
                {movie ? (
                    <MovieEditForm movie={movie} />
                ): (<NotFound />)}
            </article>
            
        </main>
    )
}

export default EditMovie;
