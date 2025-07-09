import {
	changeThemeElement,
	clearElement,
	inpTextElement,
	listTodoElement,
	showButtonsElement,
} from './dom';
import { setTheme } from './functionStyles';
import {
	addItem,
	deleteCompletedTask,
	deleteTask,
	setCheckbox,
	setFilter,
} from './functions';

if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
	changeThemeElement.checked = true;
	setTheme(true);
} else {
	changeThemeElement.checked = false;
	setTheme(false);
}

inpTextElement.addEventListener('keyup', event => {
	addItem(event);
});

listTodoElement.addEventListener('click', event => {
	setCheckbox(event);
});

showButtonsElement.addEventListener('change', event => {
	setFilter(event);
});

clearElement.addEventListener('click', () => {
	deleteCompletedTask();
});

listTodoElement.addEventListener('click', event => {
	deleteTask(event);
});

changeThemeElement.addEventListener('change', event => {
	setTheme(event.target.checked);
});
