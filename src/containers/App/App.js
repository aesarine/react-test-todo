import React, { Component } from 'react';

import Title  from '../../components/Title';
import State  from '../../components/State';
import Search from '../../components/Search';
import Filter from '../../components/Filter';
import List   from '../../components/List';
import Create from '../../components/Create';

import tasks from './tasks';

import './configs.css';
import './basic.css';
import './fonts.css';

class App extends Component {
	
	maxId = 100;
	
	state = {
		search: '',
		filter: 'all',
		tasks: tasks
	}
	
	
	filterList = (filter) => {
		this.setState({ filter });
	}
	
	searchList = (search) => {
		this.setState({ search });
	}
	
	createTask = (name) => {
		this.setState(({tasks}) => ({
			tasks: [
				...tasks,
				{
					id: this.maxId++,
					name: name,
					important: false,
					completed: false
				}
			]
		}))
	}
	
	markCompleted = (id) => {
		this.setState(({tasks}) => ({
			tasks: this.updateTask(tasks, id, 'completed')
		}))
	}
	
	markImportant = (id) => {
		this.setState(({tasks}) => ({
			tasks: this.updateTask(tasks, id, 'important')
		}))
	}
	
	updateTask = (tasks, id, prop) => {
		const idx = tasks.findIndex(el => el.id === id);
		
		return [
			...tasks.slice(0, idx),
			{
				...tasks[idx],
				[prop]: !tasks[idx][prop]
			},
			...tasks.slice(idx + 1)
		]
	}
	
	renameTask = (id, name) => {
		const { tasks } = this.state;
		
		const idx = tasks.findIndex(el => el.id === id);
		
		this.setState(({tasks}) => ({
			tasks: [
				...tasks.slice(0, idx),
				{ ...tasks[idx], name },
				...tasks.slice(idx + 1)
			]
		}))
	}
	
	deleteTask = (id) => {
		const { tasks } = this.state;
		
		const idx = tasks.findIndex(el => el.id === id);
		
		this.setState(({tasks}) => ({
			tasks: [
				...tasks.slice(0, idx),
				...tasks.slice(idx + 1)
			]
		}))
	}
	
	
	render () {
		const { search, filter, tasks } = this.state;
		
		return (
			<div className="wrapper">
				<div className="header">
					<Title />
					<State tasks={ tasks } />
				</div>
				<div className="side">
					<Search
						search={ search }
						searchList={ this.searchList }
					/>
					<Filter
						filter={ filter }
						filterList={ this.filterList }
					/>
				</div>
				<div className="main">
					<List
						search={ search }
						filter={ filter }
						tasks={ tasks }
						markCompleted={ this.markCompleted }
						markImportant={ this.markImportant }
						renameTask={ this.renameTask }
						deleteTask={ this.deleteTask }
					/>
				</div>
				<div className="footer">
					<Create
						createTask={ this.createTask }
					/>
				</div>
			</div>
		)
	}
};

export default App;
