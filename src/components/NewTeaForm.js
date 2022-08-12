import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewTeaForm(props){

  function handleNewTeaFormSubmission(event) {
    event.preventDefault();
    props.onNewTeaCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: parseInt(event.target.price.value),
      blend: event.target.blend.value,
      quantity: parseInt(130),
      crate: parseInt(1),
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewTeaFormSubmission}
      buttonText="Add to Stock" />
    </React.Fragment>
  );
}

NewTeaForm.propTypes = {
  onNewTeaCreation: PropTypes.func
};

export default NewTeaForm;