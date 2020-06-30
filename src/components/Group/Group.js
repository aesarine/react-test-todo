import React from 'react';

import './Group.css';

const Group = ({ filter }) => {
	
	return (
		<div className="group">
			<span className="group-text">{ filter }</span>
		</div>
	)
};

export default Group;
