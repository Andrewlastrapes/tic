import React, { Component } from 'react';
import './Board.css';
import Tile from "./Tile.js"





class Board extends Component{
	constructor(props){
		super(props)
		this.state = {
			board : [

			["","",""],
			["","",""],
			["","",""]
					
					],
			turn : "Player 1",
			game : "In Progress"	
		}

}

	checkArray(array){
		var x = 0
		var O = 0;
  		
		for (var i = 0; i < array.length; i++){
		  if (array[i].indexOf("X") == 0){ 
		    x = x + 1
		  } else if (array[i].indexOf("O") == 0) {
		    O = O + 1;
		   }
		  }
		 if (x == 3 || O == 3){
		  return true
		} else {
		  return false
		  }
		}



	hasWon(){
		
		// All 8 locations as variables. 


		var array1 = this.state.board[0]
		var array2 = this.state.board[1]
		var array3 = this.state.board[2]
		var array4 = [this.state.board[0][0], 
					  this.state.board[1][0],
					  this.state.board[2][0]]
		var array5 = [this.state.board[0][1], 
					  this.state.board[1][1],
					  this.state.board[2][1]]
		var array6 = [this.state.board[0][2], 
					  this.state.board[1][2],
					  this.state.board[2][2]]
		var array7 = [this.state.board[0][0], 
					  this.state.board[1][1],
					  this.state.board[2][2]]
		var array8 = [this.state.board[0][2], 
					  this.state.board[1][1],
					  this.state.board[2][0]]

		var arrays = [array1, array2, array3, array4, array5, array6, array7, array8]


		for (var i = 0; i < arrays.length; i++){
			if (this.checkArray(arrays[i])){
				return "Game Over, " + this.state.turn + " Wins!"
			} 
			
		}
			return "In Progress"



	

	}

	updateAndGameOver(location){
		
		
		
		var newBoard = this.state.board
		
		if (this.state.turn == "Player 1"){
			newBoard[location[0]][location[1]] = "X"
		} else if (this.state.turn == "Player 2"){
			newBoard[location[0]][location[1]] = "O"
		}

		
		
		this.setState({
			board : newBoard,
			turn : (this.state.turn == "Player 1") ? "Player 2" : "Player 1",
			game : this.hasWon()
		})

		
		
		
	}
		
	

	render(){
		var array1 = [];
		var array2 = [];
		var array3 = []; 
		// var array4 = [];

		for (var i = 0; i < 3; i++){
			array1.push(<Tile key={i}
							  val={this.state.board[0][i]}
							  updateAndGameOver={this.updateAndGameOver.bind(this)}
							  location={[0, i]}/>)


			array2.push(<Tile key={i}
							  val={this.state.board[1][i]}
							  updateAndGameOver={this.updateAndGameOver.bind(this)}
							  location={[1, i]}/>)
			array3.push(<Tile key={i}
							  val={this.state.board[2][i]}
							  updateAndGameOver={this.updateAndGameOver.bind(this)}
							  location={[2, i]}/>)
		
		}
	 

		
		return (
			<div className="board"> 
				<div className="Row">
					{array1}
				</div>
				<div className="Row">
					{array2}
				</div>
				<div className="Row">
					{array3}
				</div>
				<h4>Turn: {this.state.turn}</h4>
				<h4>{(this.state.game === "In Progress") ? "" : this.state.game}</h4>


			</div>
			);
	}
}

export default Board;