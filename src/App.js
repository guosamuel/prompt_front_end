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

  handleSelection = (e) => {
    const selectedUniversity = universities.find( university => university.name === e.target.innerText )
    this.setState({selectedUniversity: selectedUniversity})
  }

  render() {

    const universityOptions = universities.map( (university, index) => ({
      key: university.iped,
      text: university.name,
      value: index,
    }))

    return (
      <div>
        <TitleBar selectedUniversity={this.state.selectedUniversity}/>
        <label>Please select your university</label>
        <Dropdown
          placeholder="Please Select A University"
          search selection options={universityOptions}
          onChange={this.handleSelection}
        />
      </div>
    );
  }
}


export default App;
