//import React from 'react';
//import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

/*class App extends Component{
	render()
	{
		return(
			<div>
				<Header username="yogi" />
				<Greetings />
			</div>
			);
	
	}
}
class Header extends Component{
	render(){
		return(
			<header>
			<h1>
				welcome!!{this.props.username}
			</h1>
			</header>);
	}
}
class Greetings extends Component{
	
	render()
	{
		const date= new Date();
		const hours= date.getHours(); 
		let timeofday;
		if(hours<12)
			{	timeofday="Good Morning";	}

		else if(hours>=12 && hours<=17)
			{	timeofday="Good afternoon";	}
		
		else
			{	timeofday="Good evening";	}
		
		return(
			<h1>Hiii!!! {timeofday} </h1>
		);
	}
}*/
ReactDOM.render(<App />, document.getElementById('root'));