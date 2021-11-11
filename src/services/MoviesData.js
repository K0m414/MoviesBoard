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
    return axios
    .post(`${SERVER_ENDPOINT}/movies`,{
      title : movie.title,
      category : [movie.category],
      release_date : movie.release_date,
      description : movie.description,
      // actor : [{movie.actor}],
      similar_movies : movie.similar_movies,
      poster : movie.poster,
    })
    .then((response) => response.data)
    .catch(errorHandler);
  }
};
// const [movieData, setMovieData] = useState([]);
// console.log(movieData
const errorHandler = (err) => {
  const {
    request: { status },
    data: { message },
  } = err.response;
  console.error(`${status} : ${message}`);
};

export default MoviesData;
