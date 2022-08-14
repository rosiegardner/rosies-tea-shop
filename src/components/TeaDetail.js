import React from 'react';
import PropTypes from 'prop-types';

function TeaDetail(props){
  const { tea, onClickingDelete, onClickingBuy } = props;
  return (
    <React.Fragment>
      <h1>Tea Information</h1>
      <h3>{tea.name} - ${tea.price}.00 per .oz</h3>
      <p><b>Type:</b> <em>{tea.blend}</em></p>
      <p><b>Origin:</b> <em>{tea.origin}</em></p>
      <p>{tea.quantity} ounces available</p>
      <p>{tea.crate} crates in stock</p>
      <button onClick={() => onClickingBuy(tea.id) }>Buy Item</button>
      <br></br>
      <br></br>
      <button onClick={ props.onClickingEdit }>Update Item</button>
      <br></br>
      <button onClick={() => onClickingDelete(tea.id) }>Delete Item</button>
      <hr />
    </React.Fragment>
  );
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func
}

export default TeaDetail;