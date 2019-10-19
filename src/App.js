import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DropDown } from 'semantic-ui-react'

class App extends React.Component {

  state = {
    selectedUniversity: null
  }

  render() {
    return (
      <div>
        <TitleBar currentUniversity={this.state.selectedUniversity}/>
        <label>Please select your university</label>

      </div>
    );
  }
}


export default App;
