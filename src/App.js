import React, { Component } from 'react';
import UserInput from './Components/UserInput'
import UserOutput from './Components/UserOutput'
import './App.css';

class App extends Component {

  state = {
    persons: [
      { user: 'Josh' }
    ]
  }


  changeHandler = (event) => {
    console.log('Input Change function is working successfully')
    this.setState({
      persons: [
        { user: event.target.value }
      ]
    })
  }

  render() {

    const { persons } = this.state
    console.log(persons)

    return (
      <div className="App">
        <h1>This is the assignment</h1>

        <UserOutput userName={persons[0].user} />

        <UserInput changeA={this.changeHandler} userName={persons[0].user} />





      </div>
    );
  }
}

export default App;
