import React, { Component } from 'react';
import './Tile.css';

class Tile extends Component{
	constructor(props){
		super(props)
		this.state = {
			tile : 0,
			isActive: true

		}
	}
		clickHandler(){
		if (this.state.isActive){
			if (this.props.turn === "Player 1") {
			this.setState({
				tile: 1,
				isActive: false
				
			});
			} else if (this.props.turn === "Player 2"){
				this.setState({
					tile: 2,
					isActive: false
					
				});
			}
			this.props.updateAndGameOver(this)
			this.props.changeTurn();
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
			<div onClick={this.clickHandler.bind(this)} className= "tile">
			
				{val}
				
			

			</div>
				
			
		)
	}
	
}



export default Tile