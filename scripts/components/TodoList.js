import React, {Component} from "react";
import TodoItem from "./TodoItem";
export default class TodoList extends Component{
	render(){
		let stuff = this.props.items.map((item, index)=>{
			let style =  item.completed ? {textDecoration: "line-through"} : null ;
			return <TodoItem onClick={(e)=>{this.props.onItemClick(index)}} style={style} key={index} item={item}/>
		});
		return (
			<ul>
				{stuff}
			</ul>
		);
	}
}