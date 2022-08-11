import React from 'react';
import { v4 } from 'uuid';


function NewTeaForm(){
  return (
    <React.Fragment>
      <form onSubmit={handleNewTeaFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Tea Name' 
          required />
        <input 
          type='text'
          name='blend'
          placeholder='Type of Tea'
          required />
        <input
          type='text'
          name='origin'
          placeholder='Origin of Tea'
          required />
        <input  
          type='number'
          name='price per oz'
          placeholder='Price per ounce'
          required />
        <input 
          type='number'
          name='ounces per crate'
          placeholder='Ounces per crate'
          required />  
        <input  
          type='number'
          name='stock quantity'
          placeholder='Enter number of crates'
          required />
        <button type='submit'>Submit Tea</button>  
      </form>
    </React.Fragment>
  );
}

export default NewTeaForm;