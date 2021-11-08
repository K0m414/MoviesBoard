import React from 'react';


const Home = () => {
    // const[eventData, setEventData] = useState([]);
    // const [errorData, setErrorData] = useState(false);

    // const URL = "https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?sort=date_end&limit=1&pretty=false&timezone=UTC"

    // useEffect(() =>{// se déclenche au chargement de la page 1 fois
    //     axios.get(URL)// recupere données de l'api
    //     .then((response) =>setEventData(response.data.records[0].record))
    //         .catch(e => { // attrape erreur au niveau de l'echange entre l'api et le site
    //             setErrorData(true) //si il y a une erreur alors changement de l'état l'erreur en true 
    //             console.log('erreur')});
    //     }, [])

    return (
        <div className="main-content">
            <h1>Bienvenue sur Paris Events</h1>
        </div>
    );
};

export default Home;