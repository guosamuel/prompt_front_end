import React from 'react';
import logo from './logo.svg';
import './App.css';
import { authToken } from './authToken/authToken.js'

class App extends React.Component {

  state = {
    allUniversities: []
  }

  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/profile', {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Token <token>`
  //     }
  //   })
  // }

  render() {
    console.log(authToken)
    return (
      <div className="App">
        Hello World!
      </div>
    );
  }
}


export default App;
