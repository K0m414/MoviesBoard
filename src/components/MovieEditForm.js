import React, {useState } from 'react';
import axios from 'axios';

const MovieEditForm = ({ movie }) => {
    
    const [form, setForm] = useState({
        image: {value: movie.poster, isValid: true},
        title: {value: movie.title, isValid: true},
        date: {value: movie.release_date, isValid: true},
        description: {value: movie.description, isValid: true},
        categories: {value: movie.categories, isValid: true},
        actors: {value: movie.actors, isValid: true},
        similar_movies: {value: movie.similar_movies, isValid: true},
    })
 
    const handleInputChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        const newField = { [fieldName]: { value: fieldValue } };
        setForm({ ...form, ...newField });
        console.log(newField)
    }

    // Règles de validation du formulaire:
    const validateForm = () => {
        let newForm = form;
        // Validation de l'url
            const start = "https://image.tmdb.org/t/p/w342/";
            const end = "jpg";
            if (!form.image.value.startsWith(start) || !form.image.value.endsWith(end)) { // si le texte saisie ne commence pas 'start' et ne se termine pas par 'end'
                const errorMsg = "L'url saisie n'est pas valide";
                const newField = { value: form.image.value, error: errorMsg, isValid: false }; // message error
                newForm = { ...newForm, ...{ image: newField } };
            } else {
                const newField = { value: form.image.value, error: '', isValid: true };
                newForm = { ...newForm, ...{ image: newField } };
            }
        setForm(newForm);
        return newForm.image.isValid;
    }

    // soumission du formulaire 
    const handleSubmit = (e) => {
        e.preventDefault();
        const isFormValid = validateForm();
        console.log(isFormValid)
        if (isFormValid) { //si validité des champs
            movie.poster = form.image.value;
            movie.title= form.title.value;
            movie.date = form.date.value;
            movie.description = form.description.value;
            movie.categories = form.categories.value;
            console.log( movie.categories)

            axios.patch(`http://localhost:3000/movies/${movie.id}`, {
                poster: form.title.image,
                title: form.title.value,
                release_date: form.date.value,
                description: form.description.value,
                categories: form.categories.value
            })
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
            };
    }
    // console.log(movie.categories)
    return (
        // <div></div>

        <form onSubmit={(e)=>handleSubmit(e)}>
            
            <fieldset>
            <legend>Modifier un film</legend>
        {/* Movie image */}
            <div>
                <label htmlFor="image">Image:</label>
                <input type="text" name="image" id="image" value={form.image.value} placeholder={movie.poster} onChange={(e)=>handleInputChange(e)}></input>
                {/* error */}
                {form.image.error &&
                <div className="card-panel red accent-1">
                    {form.image.error}
                </div>}  
            </div>

        {/* Movie Title */}
            <div>
                <label htmlFor="title">Titre:</label>
                <input type="text" name="title" id="title" value={form.title.value} placeholder={movie.title} onChange={(e)=>handleInputChange(e)}></input>
            </div>

        {/* Movie date */}
            <div>
                <label htmlFor="date">Date de sortie:</label>
                <input id="date" type="date" name="date" value={form.date.value} onChange={(e)=>handleInputChange(e)}></input>
            </div>

        {/* Movie description */}
            <div>
                <label htmlFor="description">Description:</label>
                <textarea type='text' name="description" value={form.description.value} placeholder={movie.description} onChange={(e)=>handleInputChange(e)}></textarea>
            </div> 
        {/* movie categories */}
            <div>
                {movie.categories.map(category => (
                    <div>
                        <label htmlFor={"category-"+category}>Catégories:</label>
                        <input type="text" name={"category-"+category} defaultValue={category} onChange={(e)=>handleInputChange(e)} ></input>
                    </div>
                    
                ))}
            </div>
        {/* movie actors */}
            <div>
                {form.actors.value.map(actor => (
                    <div>
                        <label htmlFor="name">Nom:</label>
                        <input type="text" name="name" id="name" defaultValue={actor.character} onChange={(e)=>handleInputChange(e)} ></input>
                        <label htmlFor="character">Rôle:</label>
                        <input type="text" name="character" id="character" defaultValue={actor.name} onChange={(e)=>handleInputChange(e)} ></input>
                        <label htmlFor="image-link">Lien de l'image :</label>
                        <input type="text" name="image-link" id="image-link" defaultValue={actor.photo} onChange={(e)=>handleInputChange(e)} ></input>
                    </div>
                ))}
            </div>
        {/* movie similaire */}
            <div>
                {form.similar_movies.value.map(sm => (
                    <div>
                        <label htmlFor="title">Titre : </label>
                        <input type="text" name="title" id="title" defaultValue={sm.title} placeholder={sm.title} onChange={(e)=>handleInputChange(e)} ></input>
                        <label htmlFor="image-link">Lien de l'image : </label>
                        <input type="text" name="image-link" id="image-link" defaultValue={sm.poster} onChange={(e)=>handleInputChange(e)} ></input>
                        <label htmlFor="date">Date de sortie : </label>
                        <input id="date" type="date" name="date" defaultValue={sm.release_date} onChange={(e)=>handleInputChange(e)} ></input>
                    </div>
                ))}
            </div>

        <div className="buttons">
            {/* Submit button */}
            <button type="submit">Modifier</button>
        </div>
        </fieldset>
        </form>   
    )
}

export default MovieEditForm
