import React from 'react';
import PropTypes from 'prop-types';

function Tea(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTeaClicked(props.id)}>
        <h3>{props.name} - $ {props.price}.00</h3>
        <p>Type: {props.blend}</p>
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
  id: PropTypes.string,
  whenTeaClicked: PropTypes.func
};

export default Tea;