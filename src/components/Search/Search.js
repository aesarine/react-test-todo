import React from 'react';

import './Search.css';

const Search = ({ searchList }) => {
	return (
		<div className="search">
			<input
				className="search-input"
				type="text"
				placeholder="Search"
				onChange={ (e) => searchList(e.target.value) }
			/>
			<span className="search-button icon-search"></span>
		</div>
	)
};

export default Search;
