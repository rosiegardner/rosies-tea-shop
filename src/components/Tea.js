import React from 'react';
import PropTypes from 'prop-types';

function Tea(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTeaClicked(props.id)}>
      <h3>{props.name} - ${props.price}.00</h3>
      <p><b>Type:</b> <em>{props.blend}</em></p>
      <p><b>Origin:</b> <em>{props.origin}</em></p>
      <hr />
      </div>
    </React.Fragment>
  );
}

Tea.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  blend: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  crate: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenTeaClicked: PropTypes.func
};

export default Tea;