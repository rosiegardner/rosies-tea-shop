import React from "react";
import ReusableForm from './ReusableForm';

function EditTeaForm (props) {
  return (
    <React.Fragment>
      <ReusableForm
        buttonText="Update Item" />
    </React.Fragment>
  );
}

export default EditTeaForm;