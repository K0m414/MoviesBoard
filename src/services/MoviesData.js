import axios from 'axios';

const SERVER_ENDPOINT = 'http://localhost:3000';

const MoviesData = {
  // Récupérer le tableau des données depuis le serveur
  
  fetchAll() {
    return axios
      .post(`${SERVER_ENDPOINT}/movies`)
      .then((response) => response.data)
      .catch(errorHandler);
  },
  add(movie){
    // const [actor, setActor] =useState([]);
    // setActor('jonh')
    
    const actor ={
      name:'john',
      photo:'sdf',
      character :'gfdgfd'
    }
    const film ={
      title:'john',
      poster:'sdf',
      release_date :1546-54-64
    }
    console.log(actor)
    return axios
    .post(`${SERVER_ENDPOINT}/movies`,{
      // id:1,
      
        title: "Spider-Man: Far from Home",
        release_date: "2019-06-28",
        categories: [
            "Action",
            "Aventure",
            "Science-Fiction"
        ],
        description: "Peter et ses amis passent leurs vacances d’été en Europe. Mais ils n’auront pas vraiment l’occasion de se reposer puisque Peter accepte d’aider Nick Fury pour débusquer les mystérieuses créatures qui sont la cause des catastrophes naturelles qui frappent le continent.",
        poster: "https://image.tmdb.org/t/p/w342/zrNKUa5SBUwue39coJArNdDgQJM.jpg",
        backdrop: "https://image.tmdb.org/t/p/w342/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
        actors: [
            {
                name: "Tom Holland",
               photo: "https://image.tmdb.org/t/p/w342/ip7aXVH8s6wXv8cY6KI14OZgCI8.jpg",
                character: "Peter Parker / Spider-Man"
            },
            {
                name: "Samuel L. Jackson",
                photo: "https://image.tmdb.org/t/p/w342/mXN4Gw9tZJVKrLJHde2IcUHmV3P.jpg",
                character: "Nick Fury"
            },
            {
                name: "Jake Gyllenhaal",
                photo: "https://image.tmdb.org/t/p/w342/rJdYHYNhlcOBwbPvDZVvt1xw7bi.jpg",
                character: "Quentin Beck / Mysterio"
            },
            {
                name: "Marisa Tomei",
                photo: "https://image.tmdb.org/t/p/w342/nrRXQkCWVXQVIHhYMhEjOWehJCH.jpg",
                character: "May Parker"
            },
            {
                name: "Jon Favreau",
                photo: "https://image.tmdb.org/t/p/w342/8MtRRnEHaBSw8Ztdl8saXiw1egP.jpg",
                character: "Harold \"Happy\" Hogan"
            },
            {
                name: "Zendaya",
                photo: "https://image.tmdb.org/t/p/w342/r3A7ev7QkjOGocVn3kQrJ0eOouk.jpg",
                character: "Michelle \"MJ\" Jones"
            }
        ],
        similar_movies: [
            {
                title: "X-Men: Apocalypse",
                poster: "https://image.tmdb.org/t/p/w342/2mtQwJKVKQrZgTz49Dizb25eOQQ.jpg",
                release_date: "2016-05-18"
            },
            {
                title: "Captain Marvel",
                poster: "https://image.tmdb.org/t/p/w342/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
                release_date: "2019-03-06"
            },
            {
                title: "Superman Returns",
                poster: "https://image.tmdb.org/t/p/w342/6ZYOpyhFZrAQIe1BuhqVgzfAdGZ.jpg",
                release_date: "2006-06-28"
            }
        ],
        "id": 2
    
    })
    .then((response) => response.data)
    .catch(errorHandler);
  }
};
// const [movieData, setMovieData] = useState([]);

const errorHandler = (err) => {
  const {
    request: { status },
    data: { message },
  } = err.response;
  console.error(`${status} : ${message}`);
};

export default MoviesData;
