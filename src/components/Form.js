import React from 'react';
import { useForm } from 'react-hook-form';

const Form = (props) => {
  const defaultValues = props.person || {};

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues,
  });

  function onSubmit(data) {
    console.log('Le formulaire a été validé avec succès !', data);
    props.onValidation(data);
  }

  const isEditForm = Object.keys(defaultValues).length > 0;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <fieldset>
            <legend> {isEditForm ? 'Modifier un film' : 'Ajouter un film'}</legend>

            <FormField
                type='text'
                label='Titre'
                placeholder='Titre'
                register={{ ...register('title', { required: true }) }}
            >
                {errors.title?.type === 'required' && <p className='error-red'>Ce champs est requis !</p>}
            </FormField>
            <div>
            <select name="categories " className="categories" defaultValue='' {...register('category', { required: true })}>
                <option value="">Categories</option>
                <option value="Action">Action</option>
                <option value="Aventure">Aventure</option>
                <option value="science-fiction">Science-Fiction</option>
            </select>
            <div>
                {errors.category?.type === 'required' && <p className='error-red'>Ce champs est requis !</p>}
            </div>
            </div>
            
            <FormField
                type='date'
                label='Date de sortie'
                placeholder=''
                register={{ ...register('release_date', { required: true }) }}
            >
                {errors.release_date?.type === 'required' && <p className='error-red'>Ce champs est requis !</p>}
            </FormField>
            <div>
                <div>
                    <label>Description:</label>
                    <textarea type="text" name="Description" placeholder='Description' defaultValue='' {...register('description', { required: true })}/>
                </div>
                <div className='mt-1'>
                    {errors.description?.type === 'required' && <p className='text-red-500'>Ce champs est requis !</p>}
                </div>
            </div>
            <FormField 
                type='text' 
                label='Acteurs principaux' 
                placeholder='Tom CRUISE' 
                register={{ ...register('actor', { required: true }) }}>
                    {errors.actor?.type === 'required' && <p className='error-red'>Ce champs est requis !</p>}
            </FormField>

            <FormField
                type='text'
                label='Film similaire'
                placeholder='Autre films ...'
                register={{ ...register('similar_movies', { required: true }) }}
            >
                {errors.similar_movies?.type === 'required' && <p className='error-red'>Ce champs est requis !</p>}
            </FormField>

            <FormField
                type='text'
                label='lien du poster'
                placeholder='https://'
                register={{ ...register('poster') }}
            ></FormField>

            <button type='submit' className='button'>
                {isEditForm ? 'Modifier ce film' : 'Ajouter ce film'}
            </button>
      </fieldset>
    </form>
  );
};

const FormField = ({ label, type, placeholder, register, children }) => {
  return (
    <div >
      <label
        htmlFor={label}    
      >
        {label} :
      </label>
      <div>
        <input type={type} id={label} required placeholder={placeholder} {...register} />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Form;
