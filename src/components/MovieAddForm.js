import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router';

import './css/MovieAddForm.css'
const MovieAddForm = (props) => {
  
  const data = props.data;
  const actors = data.actors
  const similarMovie = data.similar_movies

  const navigate =useNavigate();
  //donnée récupérer du formulaire
//   const [formData, setFormData] = useState({
//     title: data.title,
//     release_date:data.release_date,
//     categories: data.categories,
//     description: data.description,
//     poster: data.poster,
//     backdrop: data.backdrop,
//     actors: actors,
//     similar_movies: similarMovie,
// })

    // console.log(data)

// max 4 de actors / similar_movies
  const actorsLength = actors.length - 4;
  actors.splice(6, actorsLength );
  const similarMovieLength = similarMovie.length - 4;
  similarMovie.splice(6, similarMovieLength );
  
  //event
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(data)
        axios.post("http://localhost:3000/movies", data)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
            navigate('/')
    };

    const handleInput = (e) => {
    //     const Name = e.target.name;
    //     const Value = e.target.value;
    //     const newFormData = {
    //         [Name] : Value,
    //     };
    //    setFormData({ ...formData, ...newFormData });
        console.log('Vous avez écrit quelque chose, ce que vous avez écrit ne sera pas pris en compte.')
    }

  return (
  <form id="form" className="add-form" onSubmit={handleSubmit}>

    <fieldset>
      <legend>Formulaire d'ajout</legend>
      {/* <img src={data.poster} alt={data.title} /> */}
      
      <label htmlFor="title">Titre:</label>
      <input onChange={(e)=>handleInput(e)} type="text" name="title" id="title" defaultValue={data.title}></input>
      
      <label htmlFor="image-link">Lien de l'image : </label>
              <input onChange={(e)=>handleInput(e)} type="text" name="image-link" id="image-link" defaultValue={data.poster} ></input>

      <label htmlFor="date">Date de sortie:</label>
      <input id="date" type="date" name="date" defaultValue={data.release_date} ></input>
      
      <label htmlFor="description">Description:</label>
      <textarea type='text' defaultValue={data.description} ></textarea>

      <div className="categories">
        <h3>Catégories:</h3>
        {data.categories.length === 0 &&
          <input onChange={(e)=>handleInput(e)} type="text" name="title" id="title" defaultValue='' ></input>
        }
        {data.categories.map((cat) => (
          <input onChange={(e)=>handleInput(e)} type="text" name="title" id="title" defaultValue={cat} ></input>
        ))}
      </div>
      
      <div>
        <h3>Distribution:</h3>
        {data.actors.length === 0 &&
        <div>
            <label htmlFor="name">Nom:</label>
            <input onChange={(e)=>handleInput(e)} type="text" name="name" id="name" defaultValue='' ></input>
            <label htmlFor="character">Rôle:</label>
            <input onChange={(e)=>handleInput(e)} type="text" name="character" id="character" defaultValue=''></input>
            <label htmlFor="image-link">Lien de l'image :</label>
            <input onChange={(e)=>handleInput(e)} type="text" name="image-link" id="image-link" defaultValue=''></input>
        </div>
          
        }
        {actors.map(actor => (
        <div>
            <label htmlFor="name">Nom:</label>
            <input onChange={(e)=>handleInput(e)} type="text" name="name" id="name" defaultValue={actor.name} ></input>
            <label htmlFor="character">Rôle:</label>
            <input onChange={(e)=>handleInput(e)} type="text" name="character" id="character" defaultValue={actor.character} ></input>
            <label htmlFor="image-link">Lien de l'image :</label>
            <input onChange={(e)=>handleInput(e)} type="text" name="image-link" id="image-link" defaultValue={actor.photo} ></input>
        </div>
        ))}
      </div>

      <div>
        <h3>Film similaire</h3>
        {data.similar_movies.length === 0 &&
        <div>
            <label htmlFor="title">Titre : </label>
            <input onChange={(e)=>handleInput(e)} type="text" name="title" id="title" defaultValue='' ></input>
            <label htmlFor="image-link">Lien de l'image : </label>
            <input onChange={(e)=>handleInput(e)} type="text" name="image-link" id="image-link" defaultValue=''></input>
            <label htmlFor="date">Date de sortie : </label>
            <input onChange={(e)=>handleInput(e)} id="date" type="date" name="date" defaultValue='' ></input>
        </div>
          
        }
        {similarMovie.map(similarMovie => (
        <div>

          {/* <img src={similarMovie.poster} alt={similarMovie.title} /> */}
            <label htmlFor="title">Titre : </label>
            <input onChange={(e)=>handleInput(e)} type="text" name="title" id="title" defaultValue={similarMovie.title} ></input>
            <label htmlFor="image-link">Lien de l'image : </label>
            <input onChange={(e)=>handleInput(e)} type="text" name="image-link" id="image-link" defaultValue={similarMovie.poster} ></input>
            <label htmlFor="date">Date de sortie : </label>
            <input onChange={(e)=>handleInput(e)} id="date" type="date" name="date" defaultValue={similarMovie.release_date} ></input>
        </div>
        ))}
      </div>

        <div className="buttons">
            <button type="submit">Valider</button>
        </div>
    </fieldset>
  </form>
  );
};

export default MovieAddForm;
