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

	hasWon(){
		// Has won either return "In Progress, or "Game Over"

		// 8 win strings 

		for (var i = 0; i < 3; i++){
			var tile = this.state.board[0][i]
		} 


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


			</div>
			);
	}
}

export default Board;