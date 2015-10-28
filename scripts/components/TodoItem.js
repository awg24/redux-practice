import React, {Component} from "react";
export default class TodoItem extends Component{
	render(){
		return (
			<li onClick={this.props.onClick} style={this.props.style}>{this.props.item.text}</li>
		);
	}
}