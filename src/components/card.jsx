import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './card.css';

class Card extends Component{

	constructor(props){
		super(props);
		this.driver = this.driver.bind(this);
	}

	driver(e){
		window.location.href = this.props.pPath;
	}

	render(){
		return (
			<div className='pCard' id='0' onClick={this.driver}>
				<i id='notch'></i>
				<p>{this.props.pName}</p>
			</div>
		);
	}
}



export default Card;