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
      price: event.target.price.value,
      blend: event.target.blend.value,
      quantity: event.target.quantity.value,
      crate: event.target.crate.value,
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