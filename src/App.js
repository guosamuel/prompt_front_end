import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Dropdown } from 'semantic-ui-react'
import TitleBar from './components/TitleBar'
import { universities } from './universities/universities'
import RequiredEssays from './components/RequiredEssays'
import OptionalEssays from './components/OptionalEssays'

class App extends React.Component {

  state = {
    selectedUniversity: null
  }

  handleSelection = (e) => {
    const selectedUniversity = universities.find( university => university.name === e.target.innerText )
    this.setState({selectedUniversity: selectedUniversity})
  }

  handleDescriptionSubmit = (e, slug) => {
    e.preventDefault()
    console.log(slug)
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
        <br />
        <br />
        <label>Please select your university</label>
        <Dropdown
          placeholder="Please Select A University"
          search selection options={universityOptions}
          onChange={this.handleSelection}
        />
        <br />
        <br />
        <label>Required Essays</label>
        {this.state.selectedUniversity ?
          <RequiredEssays
            selectedUniversity={this.state.selectedUniversity}
            handleDescriptionSubmit={this.handleDescriptionSubmit}
          /> :
          <p>Please select a univeristy </p>}
        <br/>
        <br/>
        <label>Optional Essays</label>
        {this.state.selectedUniversity ?
          <OptionalEssays
            selectedUniversity={this.state.selectedUniversity}
            handleDescriptionSubmit={this.handleDescriptionSubmit}
          /> : <p>Please select a univeristy </p>}
      </div>
    );
  }
}


export default App;
