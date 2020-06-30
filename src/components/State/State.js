import React from 'react';

import './State.css';

const State = ({ tasks }) => {
	
	const total = tasks.length;
	const done = tasks.filter(task => task.completed).length;
	
	const style = {
		width: `${ done / total * 100 }%`
	}
	
	return (
		<div className="state">
			<span className="state-text">{ done } / { total } Tasks</span>
			<span className="state-numb">{ Math.floor(done / total * 100) }</span>
			<span className="state-line" style={ style }></span>
		</div>
	)
};

export default State;
