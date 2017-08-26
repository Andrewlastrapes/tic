import React, { Component } from 'react';
import './Board.css';

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
	render(){
		var array1 = [];
		var array2 = [];
		var array3 = []; 

		for (var i = 0; i < 3; i++){
			array1.push((<div key={i}>{i}</div>))
			array2.push((<div key={i}>{i}</div>))
			array3.push((<div key={i}>{i}</div>))
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