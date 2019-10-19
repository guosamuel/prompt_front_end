import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Dropdown } from 'semantic-ui-react'
import TitleBar from './components/TitleBar'
import { universities } from './universities/universities'

class App extends React.Component {

  state = {
    selectedUniversity: null
  }

  render() {

    const universityOptions = universities.map( (university, index) => ({
      key: index,
      text: university.name,
      value: index,
    }))

    return (
      <div>
        <TitleBar currentUniversity={this.state.selectedUniversity}/>
        <label>Please select your university</label>
        <Dropdown placeholder="Please Select A University" search selection options={universityOptions}/>
      </div>
    );
  }
}


export default App;
