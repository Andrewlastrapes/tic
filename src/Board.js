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

		// rthis.props.turn
	}
	render(){
		var array1 = [];
		var array2 = [];
		var array3 = []; 

		for (var i = 0; i < 3; i++){
			array1.push(<Tile/>)
			array2.push(<Tile/>)
			array3.push(<Tile/>)
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