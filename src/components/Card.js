import React from 'react'
import "./css/card.css"

const Card = (props) => {
    // donnée reçu search
     const movieData = props.movieData[0];
    // console.log(movieData.title)
    return(
        <div className="search-result">
            
            {
                movieData && (
                   
                        <div>
                            <div className="card">
                                <div className="card_body">
                                    <div className="half">
                                        <div className="featured_text">
                                            <h2><a href="/movieDetail">{movieData.title}</a></h2>
                                        </div>
                                        <div className="image">
                                            <img src={movieData.poster} alt= {"affiche de "+movieData.title}/>
                                        </div>
                                    </div>
                                    <div className="half">
                                        <div className="release_date">
                                            {/* changer de balise */}
                                        <h3>date de sortie : </h3> 
                                        <time>{movieData.release_date}</time>
                                        </div>
                                        <div className="description">
                                            <h3>synopsis : </h3>
                                            <p>{movieData.description}</p>
                                        </div> 
                                        </div>
                                    </div>
                                    <div className="card_footer">
                                        <div className="buttons">
                                        <button type="button">en savoir plus</button>
                                        <button type="button">modifier</button>
                                        <button type="button">supprimer</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
            
                )
                
            }
            
            {/* <h2>{movieData.title}</h2> */}

            {/* <div className="card-content">
            <img src={eventdata.record.fields.cover.url} alt={"image de "+eventdata.record.fields.cover_alt}/>
            <ul>
                <li key={"date-start"+eventdata.record.id}>Débute le {EventServices.LocalDate(eventdata.record.fields.date_start)} à {EventServices.LocalHour(eventdata.record.fields.date_start)}</li>
                <li key={"date-end"+eventdata.record.id}>Termine le {EventServices.LocalDate(eventdata.record.fields.date_end)} à {EventServices.LocalHour(eventdata.record.fields.date_end)}</li>
                <li key={"category"+eventdata.record.id}>Catégorie : {eventdata.record.fields.category}</li>
                <li key={"description"+eventdata.record.id}>Description : {eventdata.record.fields.lead_text}</li>
            </ul> */}

        </div>
    )
    
    };

export default Card
