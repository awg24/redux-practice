import { combineReducers } from "redux";
import { addToDo, removeToDo, completed}  from "../actions/myActions";


export default function returnList(state = [], action){
	switch(action.type){
		case addToDo:
			return [...state, Object.assign({}, {text: action.text, completed: false})];
		case removeToDo:
			return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
		case completed:
			return [...state.slice(0, action.index), 
					Object.assign({}, state[action.index], {completed: true}),
					 ...state.slice(action.index + 1)];
		default:
			return state;
	}
}   
