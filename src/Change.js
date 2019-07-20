import React from 'react'
componentDidMount(){
	this.setState(prevState=>{
			this.state.isLogged = !this.state.isLogged
			})
}
function Change(){
	return this.state.isLogged;

}
export default Change