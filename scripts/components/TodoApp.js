import React, {Component} from "react";
import {connect} from "react-redux";
import TodoList from "./TodoList";
import {addItem, completedItem} from "../actions/myActions";
import TodoForm from "./TodoForm";
class TodoApp extends Component{
	render(){
		const {dispatch, todo} = this.props;
		return (
			<div>
				<TodoForm onAddClick={(text)=>{dispatch(addItem(text))}} />
				<TodoList onItemClick={(index)=>{dispatch(completedItem(index))}}items={this.props.todo}/>
			</div>
		);
	}
}

function select(state){
	return {
		todo: state
	};
}
export default connect(select)(TodoApp);