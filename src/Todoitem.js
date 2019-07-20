import React from 'react';

const Todoitem=(props)=>{
	const {task,completed}=props.need
	const design={
		cursor : "pointer",
		color : "red",
		textDecoration : "line-through"
	}
	return( 
		<div className='list-item'>
		<input type="checkbox" checked={completed} onChange={()=>props.handelclick(props.need.id)}/>
		<p style={completed?design:null}>{task}</p>
		</div>
	);
}
	
export default Todoitem;