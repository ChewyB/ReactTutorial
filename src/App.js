import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

 UserNameHandler = (event) => {
  this.setState(
    {userName: event.target.value}
  );
}

  state = {
    userName: "Jesus"
  }
  
  render() {
    return (
      <div className="App">
        <h1>Assignment 1</h1>
        
        <UserInput 
        input={this.UserNameHandler} 
        userName={this.state.userName}/>

        <UserOutput 
        userName={this.state.userName}/>
      </div>
    );
  }
}

export default App;
