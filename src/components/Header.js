import React from 'react';
import teaImage from './../img/tea.png';

function Header(){
  return (
    <React.Fragment>
      <h1>Rosies Tea House</h1>
      <img src={teaImage} alt="Loose leaf earl grey"/>
    </React.Fragment>
  );
}

export default Header;