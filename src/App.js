import React,{Component} from 'react';
import Todo from'./Todo';
import Todoitem from './Todoitem';
import 'tachyons';
class App extends Component{
	constructor(){
		super()
		this.state={
			item :Todo
		};
		this.handelclick=this.handelclick.bind(this);
	}
	

	handelclick(id){
		this.setState( prevState=>{
		const updatetodo=prevState.item.map(todo=>{
			if(todo.id===id)
			{
				todo.completed=!todo.completed
			} 
			return todo;
		}
		)

		return {
			item : updatetodo
		}
		
		}

		)
	}


	render(){
		const todos=this.state.item.map(work=><Todoitem key={work.id} need={work} handelclick={this.handelclick}/>) ;
		return(
			<div className="Todo-list">
			{todos}
		
			</div>
			);
	}
}
export default App