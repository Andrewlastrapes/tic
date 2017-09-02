import React, { Component } from 'react';
import './Tile.css';

class Tile extends Component{
	constructor(props){
		super(props)
			this.state = {
				isActive: false
			}
		
		
	}
		clickHandler(){
		if(!this.state.isActive){
			this.props.updateAndGameOver(this.props.location)
			this.setState({isActive: true})
		}
		
		
			
		}
	



	render(){
		

		
		
		return (
			<div onClick={this.clickHandler.bind(this)} className= "tile">
			
			
				{this.props.val}
			

			</div>
				
			
		)
	}
	
}



export default Tile