import React from 'react';

import Task from '../Task';

import './List.css';

const List = ({ search, filter, tasks, markCompleted, markImportant, renameTask, deleteTask }) => {
	let list = tasks;
	
	if (search.length > 0) {
		list = list.filter(task => task.name.search(new RegExp(search, 'i')) > -1);
	}
	if (filter === 'pending') {
		list = list.filter(task => !task.completed);
	}
	if (filter === 'completed') {
		list = list.filter(task => task.completed);
	}
	
	list = list.map(task => {
		const { id, ...opts } = task;
		
		return (
			<Task
				key={ id }
				
				markCompleted={ () => markCompleted(id) }
				markImportant={ () => markImportant(id) }
				renameTask={ (name) => renameTask(id, name) }
				deleteTask={ () => deleteTask(id) }
				{ ...opts }
			/>
		)
	});
	
	return (
		<div className="list">
			{ list }
		</div>
	);
};

export default List;
