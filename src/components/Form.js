import axios from 'axios';
import React from 'react';


const Form = (props) => {
  
  const data = props.data;
  const actors = data.actors
  const similarMovie = data.similar_movies

// max 4 de actors / similar_movies
  const actorsLength = actors.length - 4;
  actors.splice(4, actorsLength );
  const similarMovieLength = similarMovie.length - 4;
  similarMovie.splice(4, similarMovieLength );

  const newData = {
          title: data.title,
          release_date:data.release_date,
          categories: data.categories,
          description: data.description,
          poster: data.poster,
          backdrop: data.backdrop,
          actors: actors,
          similar_movies: similarMovie,
      };
    console.log(newData)
    
  //event
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data)
    axios.post("http://localhost:3000/movies", data)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
    
};
  return (
  <form onSubmit={handleSubmit}>

    <fieldset>
      <legend>Formulaire d'ajout</legend>
      <img src={data.poster} alt={data.title} />

      <label htmlFor="title">Titre:</label>
      <input type="text" name="title" id="title" defaultValue={data.title}></input>
      
      <label htmlFor="date">Date de sortie:</label>
      <input id="date" type="date" name="date" defaultValue={data.release_date} ></input>
      
      <label htmlFor="description">Description:</label>
      <textarea type='text' defaultValue={data.description} ></textarea>

      <div className="categories">
        <h3>Catégories:</h3>
        {data.categories.map((cat) => (
          <input type="text" name="title" id="title" defaultValue={cat} ></input>
        ))}
      </div>
      
      <div>
        <h3>Distribution:</h3>
          {actors.map(actor => (
            <div>
              <label htmlFor="title">Nom:</label>
              <input type="text" name="title" id="title" defaultValue={actor.name} ></input>
              <label htmlFor="title">Rôle:</label>
              <input type="text" name="title" id="title" defaultValue={actor.character} ></input>
            </div>
          ))}
      </div>

      <div>
        <h3>Film similaire</h3>
        {similarMovie.map(similarMovie => (
        <div>
          <img src={similarMovie.poster} alt={similarMovie.title} />
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

export default Form;
