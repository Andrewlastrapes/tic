import React, { Component } from 'react';
import './App.css';
import Board from "./Board.js"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      turn : "Player 1"
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <Board/>
        <h4>Turn: {this.state.turn}</h4>
      </div>
    );
  }
}



export default App;
