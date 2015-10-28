export const addToDo = "addTodo";
export const removeToDo = "removeToDo";
export const completed = "completed";

export function addItem(text){
	return { type: addToDo, text };
}

export function removeItem(index){
	return {type: removeToDo, index};
}

export function completedItem(index){
	return {type: completed, index}
}