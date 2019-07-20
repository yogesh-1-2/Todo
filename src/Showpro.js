import React from 'react';
const Showpro=(props)=>{
	const {name,price,quantity}=props.item;
	return(
		<div>
		<h1>{name}</h1>
		<h3>{price}</h3>
		<h3>{quantity}</h3>
		<hr />
		</div>
		);

}
export default Showpro;