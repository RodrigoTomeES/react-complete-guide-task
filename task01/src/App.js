import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'rotome'
  }

  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  }

  render() {
    return (
      <div className = "App">
        <UserInput changed = {this.usernameChangedHandler} user = {this.state.username}/>
        <UserOutput user = {this.state.username}/>
        <UserOutput />
      </div>
    );
  }
}

export default App;
