import React from 'react';
import NewTeaForm from './NewTeaForm';
import TeaList from './TeaList';

class TeaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTeaList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewTeaToList = (newTea) => {
    const newMainTeaList = this.state.mainTeaList
      .concat(newTea);
    this.setState({
      mainTeaList: newMainTeaList, 
      formVisibleOnPage: false 
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = 
        <NewTeaForm 
          onNewTeaCreation={this.handleAddingNewTeaToList} />;
          buttonText = "Return to Tea List";
    } else {
      currentlyVisibleState = 
      <TeaList 
      teaList={this.state.mainTeaList} />;
      buttonText = "View Tea";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default TeaControl;