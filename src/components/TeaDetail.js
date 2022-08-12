import React from 'react';
import PropTypes from 'prop-types';

function TeaDetail(props){
  const { tea, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Tea Information</h1>
      <h3>{tea.name} - ${tea.price}.00 per .oz</h3>
      <p><b>Type:</b> <em>{tea.blend}</em></p>
      <p><b>Origin:</b> <em>{tea.origin}</em></p>
      <h4>{tea.quantity} available</h4>
      <h4>{tea.crate} crates in stock</h4>
      <button onClick= { props.onClickingEdit }>Update Item</button>
      <button onClick={() => onClickingDelete(tea.id) }>Delete Item</button>
      <hr />
    </React.Fragment>
  );
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default TeaDetail;