import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewTeaForm(props){

  function handleNewTeaFormSubmission(event) {
    event.preventDefault();
    props.onNewTeaCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      blend: event.target.blend.value,
      quantity: event.target.quantity.value,
      crate: event.target.crate.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewTeaFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Tea Name' />
        <input 
          type='text'
          name='blend'
          placeholder='Type of Tea'/>
        <input
          type='text'
          name='origin'
          placeholder='Origin of Tea' />
        <input  
          type='number'
          name='price per oz'
          placeholder='Price per ounce' />
        <input 
          type='number'
          name='ounces per crate'
          placeholder='Ounces per crate'/>  
        <input  
          type='number'
          name='stock quantity'
          placeholder='Enter number of crates' />
        <button type='submit'>Add Tea to Stock</button>  
      </form>
    </React.Fragment>
  );
}

NewTeaForm.propTypes = {
  onNewTeaCreation: PropTypes.func
};

export default NewTeaForm;