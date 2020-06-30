import React, { Component } from 'react';

import './Task.css';

class Task extends Component {
	
	state = {
		text: this.props.name,
		renaming: false
	}
	
	onEdit = () => {
		this.setState({
			renaming: true
		})
	}
	
	onType = (e) => {
		this.setState({
			text: e.target.value
		})
	}
	
	onDone = () => {
		this.props.renameTask(this.state.text);
		
		this.setState({
			renaming: false
		})
	}
	
	render () {
		const { name, important, completed, markCompleted, markImportant, deleteTask } = this.props;
		const { text, renaming } = this.state;
		
		let className = 'task';
		
		if (renaming) className += ' renaming';
		if (important) className += ' important';
		if (completed) className += ' completed';
		
		return (
			<div className={ className }>
				<span
					className="task-status icon-check"
					onClick={ markCompleted }
				></span>
				<span
					className="task-name"
					onDoubleClick={ this.onEdit }
				>
					{ name }
					
					<input
						className="task-text"
						value={ text }
						onChange={ this.onType }
						onBlur={ this.onDone }
					/>
				</span>
				<span
					className="task-important"
					onClick={ markImportant }
				></span>
				<span
					className="task-delete icon-close"
					onClick={ deleteTask }
				></span>
			</div>
		)
	}
}

export default Task;
