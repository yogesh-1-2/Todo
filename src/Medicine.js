import React from 'react';
const Medicine=(props)=>{
	const {url,name}=props.med;
	return(
		<div>
		<img src={url} />
		<h1>{name} </h1>

		</div>
		);
	}
export default Medicine;