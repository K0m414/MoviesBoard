import React, {useState, useEffect } from 'react';
import MovieEditForm from '../components/MovieEditForm';
import { useParams } from 'react-router';
import axios from 'axios';

function EditMovie() {
    const { id } = useParams();
    const [movie, setMovie] = useState('');
    

    useEffect(() => {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then((response) => setMovie(response.data))
            .catch(error => console.log(error))
            console.log(movie)
    }, [id]);
    
    return (
        <article>
            {movie ? (
                <MovieEditForm movie={movie} />
            ): (<p>Il y a un petit problème ...</p>)}
        </article>
    )
}

export default EditMovie
