import React, {Component} from "react";
import TodoList from "./TodoList";
export default class TodoForm extends Component{
	render(){
		return (
			<form onSubmit={(e)=>{this.handleEvent(e)}}>
				<input ref="item" type="text"/>
				<button>ADD</button>
			</form>
		);
	}
	handleEvent(e){
		e.preventDefault();
		const item = this.refs.item;
		this.props.onAddClick(item.value);
		item.value = "";
	}
}