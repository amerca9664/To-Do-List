
import { changeThemeElement, clearElement, inpTextElement, listTodoElement, showButtonsElement, root } from "./dom";
import { addItem, deleteCompletedTask, deleteTask, setCheckbox, setFilter } from "./functions";


const setTheme = (themeState)=>{
	if(themeState){
		root.style.setProperty('--backgroundBody', 'hsl(235, 21%, 11%)');
		root.style.setProperty('--imageTheme', 'url(../assets/images/icon-sun.svg)');
		root.style.setProperty('--itemBackground', 'hsl(235, 24%, 19%)');
		root.style.setProperty('--borderItem', 'hsl(237, 14%, 26%)');
		console.log('dark');
		
	}else{
		root.style.setProperty('--backgroundBody', 'hsl(236, 33%, 92%)');
		root.style.setProperty('--imageTheme', 'url(../assets/images/icon-moon.svg)')
		root.style.setProperty('--itemBackground', 'hsl(0, 0%, 98%)');
		root.style.setProperty('--borderItem', 'hsl(236, 33%, 92%)');
		console.log('not fark')
		
	}
}

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