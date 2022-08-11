import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={FormSubmissionHandler}>
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
        <button type='submit'>{props.buttonText}</button>  
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;