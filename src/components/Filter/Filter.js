import React from 'react';

import './Filter.css';

const Filter = ({ filter, filterList }) => {
	
	const filters = ['all', 'pending', 'completed']
		.map(name => {
			const active = (filter === name) ? 'active' : '';
			
			return (
				<span
					key={ `filter-${name}` }
					className={ `filter-button ${active}` }
					onClick={ () => filterList(name) }
				>
					{ name }
				</span>
			)
		});
	
	
	
	return (
		<div className="filter">
			{ filters }
		</div>
	)
}

export default Filter;
