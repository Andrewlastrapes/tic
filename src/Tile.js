import React, { Component } from 'react';
import './Tile.css';

class Tile extends Component{
	constructor(props){
		super(props)
		this.state = {
			// 0= blank, 1 = x, 2 = 0
			tile : 0

		}
	}
	render(){
		var val = "" 

		if (this.state.tile == 1){
			val = "X"
		} else if (this.state.tile == 2){
			val = "O"
		}

		return (
			<div className= "tile">
				{val}

			</div>
		)
	}
	
}



export default Tile