const inpTextElement = document.getElementById('inpText');
const listTodoElement = document.getElementById('listTodo');
const showButtonsElement = document.getElementById('showButtons');
const clearElement = document.getElementById('clear');

const FILTERS_ACTS = {
	complete: true,
	active: false
};

let listTodov = [];
const fragment = document.createDocumentFragment();
let selectedViewAction = 'all';
const addItems = items => {
	let filteredJobs = [];
	if (selectedViewAction != 'all') {
		filteredJobs = items.filter(
			item => item.state === FILTERS_ACTS[selectedViewAction]
		);
	} else {
		filteredJobs = items;
	}

	filteredJobs.forEach(item => {
		const id = item.id;
		const nameJob = item.name;
		const isChecked = item.state;
		const classCheckButton = 'todoCont__checkbox';
		const classLabelChk = 'todoCont__label'
        const classDiv = 'todoCont__div';
		const classDivCheckbox = 'todoCont__divCheckbox'
		const classInput = 'todoCont__Close'

		const div = document.createElement('div');
        div.classList = classDiv;

		const divCheckbox = document.createElement('div')
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
		input.dataset['select']= id;
		

		checkbox.checked = isChecked;

		div.append(divCheckbox, input);

		fragment.append(div);
	});

	listTodoElement.append(fragment);
};

const remove = () => {
	[...listTodoElement.children].forEach(item => item.remove());
};

let idGen = 0;
inpTextElement.addEventListener('keyup', event => {
	if (event.key === 'Enter' && inpTextElement.value != '') {
		const itemAdd = inpTextElement.value;
		const objectJob = { id: idGen, name: itemAdd, state: false };
		listTodov.push(objectJob);

		let send = [];
		const objectSend = { id: idGen, name: itemAdd, state: false };
		send.push(objectSend);

		addItems(send);
		inpTextElement.value = '';
		idGen++;
	}
});

listTodoElement.addEventListener('click', event => {
	if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
		const id = Number(event.target.id);
		const isChecked = event.target.checked;
		listTodov.forEach(item => {
			if (item.id === id) {
				item.state = isChecked;
			}
		});

		console.log(id);
		console.log(listTodov);
		remove();
		addItems(listTodov);
	}
});

showButtonsElement.addEventListener('change', event => {
	console.log(event.target.dataset.action);
	selectedViewAction = event.target.dataset.action;
	remove();
	addItems(listTodov);
});

clearElement.addEventListener('click', event => {
	remove();
	const cleanComplete = listTodov.filter(item => item.state === false);

	listTodov = cleanComplete;
	addItems(listTodov);
});

listTodoElement.addEventListener('click', event =>{
	
	if(event.target.classList.value === 'todoCont__Close'){
		console.log(event.target)

	}

})
	