import React from 'react';
import Tea from './Tea';

const mainTeaList = [
  {
    name: "Rosehip",
    origin: "Europe, Asia and North Africa",
    price: 2.99,
    blend: "Herbal Tea",
    quantity: 1,
    crate: 130 
  },
  {
    name: "Hojicha",
    origin: "Kyoto",
    price: 3.99,
    blend: "Green Tea",
    quantity: 1,
    crate: 130
  }
]

function TeaList(){
  return (
    <React.Fragment>
      <hr/>
      {mainTeaList.map((tea, index) => 
        <Tea 
          name={tea.name}
          origin={tea.origin}
          price={tea.price}
          blend={tea.blend}
          quantity={tea.quantity}
          crate={tea.crate}
          key={index} />
        )}
    </React.Fragment>
  );
}

export default TeaList;