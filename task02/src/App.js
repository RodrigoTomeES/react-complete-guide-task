import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    arrayOfChar: [],
  }

  inputChangeHandler = (event) => {
    this.setState({
      arrayOfChar: event.target.value.split(''),
    });
  }

  removeClickHandler = (index) => {
    const newArrayOfChar = [...this.state.arrayOfChar];
    newArrayOfChar.splice(index, 1);
    this.setState({
      arrayOfChar: newArrayOfChar,
    });
  }

  render() {
    const charList = this.state.arrayOfChar.map((c, index) => {
      return <CharComponent 
                char = {c} 
                click = {() => this.removeClickHandler(index)}
                key = {index}
                />
    });
    
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr/>
        <input 
          type="text" 
          onChange={(event) => this.inputChangeHandler(event)} 
          value = {this.state.arrayOfChar.join('')}/>
        <ValidationComponent length = {this.state.arrayOfChar.length}/>
        <p>length: {this.state.arrayOfChar.length}, text: {this.state.arrayOfChar.join('')}</p>
        {charList}
      </div>
    );
  }
}

export default App;
