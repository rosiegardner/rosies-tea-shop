import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Tea Name' />
          <br></br>
          <br></br>
        <input 
          type='text'
          name='blend'
          placeholder='Type of Tea'/>
          <br></br>  
          <br></br>     
        <input
          type='text'
          name='origin'
          placeholder='Origin of Tea' />
          <br></br>
          <br></br>     
        <input  
          type='text'
          name='price'
          placeholder='$Dollar Amount - Price per ounce' />
          <br></br> 
          <br></br>  
        <button type="submit">{props.buttonText}</button>  
        <br></br>
        <br></br>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;