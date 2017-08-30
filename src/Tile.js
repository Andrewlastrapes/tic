import React, { Component } from 'react';
import './Tile.css';

class Tile extends Component{
	constructor(props){
		super(props)
		this.state = {
			tile : 0

		}
	}
		clickHandler(){
			if (this.state.turn === "Player 1") {
			this.setState({
				tile: 1
				
			});
		} else if (this.state.turn === "Player 2"){
			this.setState({
				tile: 2
				
			});
		}
	}



	render(){
		var val = "" 

		if (this.state.tile === 1){
			val = "X"
		} else if (this.state.tile === 2){
			val = "O"
		}

		return (
			<div className= "tile">
				
			onClick={this.clickHandler.bind({val})}
				
			}

			</div>
		)
	}
	
}



export default Tile