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
        <ul>
          <li>
            <input
              type='text'
              name='name'
              placeholder='Tea Name' /></li>
          <br></br>
          <li>
            <input 
              type='text'
              name='blend'
              placeholder='Type of Tea'/></li>
          <br></br>
          <li>
            <input
              type='text'
              name='origin'
              placeholder='Origin of Tea' /></li>
          <br></br>
          <li>
            <p><input  
              type='number'
              name='price per oz'
              placeholder='$Dollar Amount - Price per ounce' /><small>.00</small></p></li>
          <br></br>
          <li>
            <p><input 
              type='number'
              name='ounces per crate'
              placeholder='Ounces per crate' /><small>.oz</small></p></li>
          <br></br>
          <li>
            <input  
              type='number'
              name='stock quantity'
              placeholder='Enter number of crates' /></li>
        </ul>
        <button type='submit'>Add Tea to Stock</button>  
      </form>
    </React.Fragment>
  );
}

NewTeaForm.propTypes = {
  onNewTeaCreation: PropTypes.func
};

export default NewTeaForm;