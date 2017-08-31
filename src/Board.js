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
					
					]		
		}

}


	updateAndGameOver(tile){
		var location = tile.props.location
		var value = tile.state.tile
		var oldBoard = this.state.board
		// update oldBoard to contain "value" at "location"

		// then, check all 8 win conditions
	}

	render(){
		var array1 = [];
		var array2 = [];
		var array3 = []; 

		for (var i = 0; i < 3; i++){
			array1.push(<Tile turn={this.props.turn} 
							  changeTurn={this.props.changeTurn} 
							  updateAndGameOver={this.updateAndGameOver.bind(this)}
							  location={[0, i]} />)

			array2.push(<Tile turn={this.props.turn} 
							  changeTurn={this.props.changeTurn} 
							  updateAndGameOver={this.updateAndGameOver.bind(this)}
							  location={[1, i]}/>)
			array3.push(<Tile turn={this.props.turn} 
							  changeTurn={this.props.changeTurn} 
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

			</div>
			);
	}
}

export default Board;