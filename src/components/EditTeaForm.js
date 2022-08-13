import React from "react";
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditTeaForm (props) {
  const {tea} = props;

  function handleEditTeaFormSubmission(event) {
    event.preventDefault();
    props.onEditTea({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: parseInt(event.target.price.value),
      blend: event.target.blend.value,
      quantity: parseInt(130),
      crate: parseInt(1),
      id: tea.id
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditTeaFormSubmission}
        buttonText="Update Item" />
    </React.Fragment>
  );
}

EditTeaForm.propTypes = {
  tea: PropTypes.object,
  onEditTea: PropTypes.func
};

export default EditTeaForm;

