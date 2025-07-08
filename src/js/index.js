
import { changeThemeElement, clearElement, inpTextElement, listTodoElement, showButtonsElement, root } from "./dom";
import { addItem, deleteCompletedTask, deleteTask, setCheckbox, setFilter } from "./functions";
import { setTheme } from "./functionStyles";




if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	changeThemeElement.checked = true;
	setTheme(true);
}else{
	changeThemeElement.checked = false;
	setTheme(false);
}



inpTextElement.addEventListener('keyup', event => {
	addItem(event)
});

listTodoElement.addEventListener('click', event => {
	setCheckbox(event)
});

showButtonsElement.addEventListener('change', event => {
	setFilter(event)
});

clearElement.addEventListener('click', event => {
	deleteCompletedTask()

});

listTodoElement.addEventListener('click', event => {
	deleteTask(event)
});

changeThemeElement.addEventListener('change', event =>{
	setTheme(event.target.checked)
	console.log(event.target.checked)
} )