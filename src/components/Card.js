import React from 'react'


const Card = (props) => {
    // donnée reçu search
     const movieData = props.movieData[0];
    // console.log(movieData.title)
    return(
        <div className="search-result">
            
            {
                movieData && (
                   
                        <div>
                            <h2><a href="/movieDetail">{movieData.title}</a></h2>
                            <img src={movieData.poster} alt= {"affiche de "+movieData.title}/>
                            <ul>
                                <li>la date de sortie : {movieData.release_date} </li>
                                <li>la description : {movieData.description} </li>
                            </ul>
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
