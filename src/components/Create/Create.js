import React, { Component } from 'react';

import './Create.css';

class Create extends Component {
	
	state = {
		name: '',
		open: false
	}
	
	onChange = (e) => {
		this.setState({
			name: e.target.value
		})
	}
	
	onSubmit = (e) => {
		const { createTask } = this.props;
		const { name, open } = this.state;
		
		e.preventDefault();
		
		if (!open) {
			this.setState({
				name: '',
				open: true
			})
		} else {
			
			if (name.length) {
				createTask(name);
			}
			
			this.setState({
				open: false
			})
		}
	}
	
	render () {
		const { name, open } = this.state;
		
		let className = 'create';
		
		if (open && !name.length) className += ' empty';
		if (open) className += ' open';
		
		return (
			<form className={ className }>
				<input
					className="create-input"
					type="text"
					placeholder="Type here the name of your new task"
					onChange={ this.onChange }
					value={ name }
				/>
				<button
					className="create-button icon-plus"
					onClick={ this.onSubmit }
				></button>
			</form>
		)
	}
}

export default Create;
