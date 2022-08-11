import React from 'react';

function Tea(props){
  return (
    <React.Fragment>
      <h3>{props.name} - ${props.price}</h3>
      <p><em>{props.blend} - {props.origin}</em></p>
    </React.Fragment>
  );
}

export default Tea;