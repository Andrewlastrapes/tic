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

  function changeTurn1(props){
    this.setState({turn: "Player 2"});
  }

  function changeTurn2(props){
    this.setState({turn: "Player 1"})
  }

  render() {
    return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <Board turn={this.state.turn} />
        <h4>Turn: {this.state.turn}</h4>
      </div>
    );
  }
}



export default App;
