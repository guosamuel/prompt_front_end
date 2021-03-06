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

  //attempt to edit all the same prompts at once
  handleDescriptionSubmit = (e, slug, description) => {
    e.preventDefault()

    this.state.selectedUniversity.supplements.forEach( (supplement, suppIndex) => {
      supplement.prompts.forEach( (prompt, promptIndex) => {
        if (prompt.slug === slug) {

          this.setState( () => ({
            ...this.state.selectedUniversity,
            supplements: [
              ...this.state.selectedUniversity.supplements.slice(0, suppIndex),
              {
                ...this.state.selectedUniversity.supplements[suppIndex],
                prompts: [
                  ...this.state.selectedUniversity.supplements[suppIndex].prompts.slice(0, promptIndex),
                  {
                    ...prompt,
                    prompt: description
                  },
                  ...this.state.selectedUniversity.supplements[suppIndex].prompts.slice(promptIndex+1)
                ]
              },
              ...this.state.selectedUniversity.supplements.slice(suppIndex+1)
            ]
          }))

        }
      })
    })

    this.state.selectedUniversity.application_essays.forEach( (appEssay, appEssayIndex) => {
      appEssay.prompts.forEach( (prompt, promptIndex) => {
        if (prompt.slug === slug) {

          this.setState( () => ({
            ...this.state.selectedUniversity,
            application_essays: [
              ...this.state.selectedUniversity.application_essays.slice(0, appEssayIndex),
              {
                ...this.state.selectedUniversity.application_essays[appEssayIndex],
                prompts: [
                  ...this.state.selectedUniversity.application_essays[appEssayIndex].prompts.slice(0, promptIndex),
                  {
                    ...prompt,
                    prompt: description
                  },
                  ...this.state.selectedUniversity.application_essays[appEssayIndex].prompts.slice(promptIndex+1)
                ]
              },
              ...this.state.selectedUniversity.application_essays.slice(appEssayIndex+1)
            ]
          }))

        }
      })
    })
    // console.log("DID IT WORK?!")
  }

  render() {
    const universityOptions = universities.map( (university, index) => ({
      key: university.iped,
      text: university.name,
      value: index,
    }))

    console.log(this.state.selectedUniversity)
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
