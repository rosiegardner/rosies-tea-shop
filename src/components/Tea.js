import React from 'react';
import PropTypes from 'prop-types';

function Tea(props){
  return (
    <React.Fragment>
      <h3>{props.name} - ${props.price}</h3>
      <p><b>Type:</b> <em>{props.blend}</em></p>
      <p><b>Origin:</b> <em>{props.origin}</em></p>
      <hr />
    </React.Fragment>
  );
}

Tea.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  blend: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  crate: PropTypes.number.isRequired
};

export default Tea;