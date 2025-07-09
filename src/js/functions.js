import { FILTERS_ACTS } from './consts';
import { inpTextElement, listTodoElement } from './dom';

let listTodov = [];

let selectedViewAction = 'all';

let idGen = 0;
const addItem = event => {
	if (event.key === 'Enter' && inpTextElement.value !== '') {
		const itemAdd = inpTextElement.value;
		const objectJob = { id: idGen, name: itemAdd, state: false };
		listTodov.push(objectJob);

		// let send = [];
		// const objectSend = { id: idGen, name: itemAdd, state: false };
		// send.push(objectSend);

		printTasks(listTodov);
		inpTextElement.value = '';
		idGen++;
	}
};

const setCheckbox = event => {
	if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
		const id = Number(event.target.id);
		const isChecked = event.target.checked;
		listTodov.forEach(item => {
			if (item.id === id) {
				item.state = isChecked;
			}
		});

		printTasks(listTodov);
	}
};

const printTasks = items => {
	const fragment = document.createDocumentFragment();
	let filteredJobs = [];
	if (selectedViewAction !== 'all') {
		filteredJobs = items.filter(
			item => item.state === FILTERS_ACTS[selectedViewAction],
		);
	} else {
		filteredJobs = items;
	}

	filteredJobs.forEach(item => {
		const id = item.id;
		const nameJob = item.name;
		const isChecked = item.state;
		const classCheckButton = 'todoCont__checkbox';
		const classLabelChk = 'todoCont__label';
		const classDiv = 'todoCont__div';
		const classDivCheckbox = 'todoCont__divCheckbox';
		const classInput = 'todoCont__Close';

		const div = document.createElement('div');
		div.classList = classDiv;

		const divCheckbox = document.createElement('div');
		divCheckbox.classList = classDivCheckbox;

		const label = document.createElement('label');
		label.htmlFor = id;
		label.textContent = nameJob;
		label.classList = classLabelChk;

		const checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.id = id;
		checkbox.classList = classCheckButton;
		checkbox.hidden = true;

		divCheckbox.append(checkbox, label);

		const input = document.createElement('input');
		input.type = 'button';
		input.classList = classInput;
		input.dataset.select = id;

		checkbox.checked = isChecked;

		div.append(divCheckbox, input);

		fragment.append(div);
	});
	listTodoElement.textContent = '';
	listTodoElement.append(fragment);
};

const remove = () => {
	[...listTodoElement.children].forEach(item => item.remove());
};

const setFilter = event => {
	selectedViewAction = event.target.dataset.action;

	printTasks(listTodov);
};

const deleteCompletedTask = () => {
	const cleanComplete = listTodov.filter(item => item.state === false);

	listTodov = cleanComplete;
	printTasks(listTodov);
};

const deleteTask = event => {
	if (event.target.classList.value === 'todoCont__Close') {
		listTodov.forEach((item, index) => {
			if (item.id === Number(event.target.dataset.select)) {
				listTodov.splice(index, 1);
			}
		});

		event.target.parentElement.remove();
	}
};
export {
	printTasks,
	remove,
	addItem,
	setCheckbox,
	setFilter,
	deleteCompletedTask,
	deleteTask,
};
