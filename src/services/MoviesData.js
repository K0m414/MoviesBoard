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
    const actor ='jonh'
    console.log(actor)
    return axios
    .post(`${SERVER_ENDPOINT}/movies`,{
      // id:1,
      title : movie.title,
      category : ['action'],
      release_date : movie.release_date,
      description : movie.description,
      actor : [{actor}],
      similar_movies : [{actor}],
      poster : movie.poster,
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
