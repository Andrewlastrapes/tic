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
  

  changeTurn(){
    if (this.state.turn == "Player 1"){
      this.setState({turn: "Player 2"});
  } else if (this.state.turn == "Player 2"){
      this.setState({turn: "Player 1"});
  } 
}

  render() {
    return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <Board turn={this.state.turn} changeTurn={this.changeTurn.bind(this)} />
        <h4>Turn: {this.state.turn}</h4>
      </div>
    );
  }
}



export default App;
