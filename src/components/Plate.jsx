import React,{Component} from 'react';
import './Plate.css';
import Card from './card';


function getValue(from){
	return document.getElementById(from).value;
}

class Plate extends Component{

	// eslint-disable-next-line no-useless-constructor
	constructor(props){
		super(props);
		this.state = {
			pata: 'nhi',
			kya: 'ho rha h',
		};
		this.loadJSON = this.loadJSON.bind(this);
		this.loadJSON();
	}

	loadJSON = () => {
		fetch('db.json', {
				method: "get",
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				}
			})
			.then(response => {
				return response.json()
			})
			.then(data => {
				this.setState({
					pata: data.data
				});
			});
	}


	render(){
		let h = this.state.pata;
		return (
			<div className='plate' id='base' >
				{
					Object.keys(h).map((x) => {
						return <Card pName={this.state.pata[x].name} pPath={this.state.pata[x].path} />
					})
				}
			</div>
		);
	}
}


class AddBT extends Component{
	constructor(props){
		super(props);
		this.state = {isOpen: false};
		this.pop = this.pop.bind(this);
		this.getFolder = this.getFolder.bind(this);
	}

	

	getFolder(e){
		var files = e.target.files;
    	var path = files[0].webkitRelativePath;
    	var Folder = path.split("/");
    	console.log(Folder[0]);
	}

	pop(event){
		this.state.isOpen = event.currentTarget.classList.toggle("open");
		if(this.state.isOpen){
			document.getElementById('card').style.display = 'grid';
		}else{
			document.getElementById('card').style.display = 'none';
		}
	}
	render(){
		return (
			<div>
				<div id='addbt' onClick={this.pop}>
					<h2 className='plus'>+</h2>
				</div>
				<div id='card'>
					<input type='text' id='projectName'  placeholder='Project Name' />
					<input type='text' id='projectFolder' />
					<button id='create' onClick={this.props.onTouch}>Create</button>
				</div>
			</div>
		);
	}
}


export default Plate;