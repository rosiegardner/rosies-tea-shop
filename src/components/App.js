import React from 'react';
import Header from './Hearder';

function App(){
  const tea = 'Rose hip & lavender'
  return (
    <React.Fragment>
      <Header />
      <h1>Rosies Tea Shop</h1>
      <h4>{tea}</h4>
      <hr />
    </React.Fragment>
  )
}

export default App;
