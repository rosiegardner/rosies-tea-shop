import React from 'react';
import teaImage from './../img/tea.png';

function Header(){
  return (
    <React.Fragment>
      <h1>Rosies Tea House</h1>
      <p><em><small>Loose Leaf Tea Bagging since 1989</small></em></p>
      <img src={teaImage} alt="Loose leaf earl grey"/>
    </React.Fragment>
  );
}

export default Header;