import React, { Component } from 'react';
import './App.css';
import Board from "./Board.js"

class App extends Component {
  constructor(props){
    super(props);
  
  }
  

  render() {
    return (
    
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <Board />
      </div>

    );
  }
}



export default App;
