'use strict';
import React, {Component} from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {connect} from "react-redux";
import {addItem, removeItem, completedItem} from "./actions/myActions";
import returnList from "./reducers/myReducers";
import TodoApp from "./components/TodoApp";
import {Provider} from "react-redux";
let containerEl = document.getElementById("container");

let store = createStore(returnList);

ReactDOM.render(
	<Provider store={store}>
		<TodoApp/>
	</Provider>, 
		containerEl);
