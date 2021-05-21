const server = 'https://jsonplaceholder.typicode.com/posts';

const sendData = (data, callback, falseCallback) => {
	const request = new XMLHttpRequest();
	request.open('POST', server);

	request.addEventListener('readystatechange', () => {
		if(request.readyState !== 4) return;
		if(request.status === 200 || request.status === 201) {
			const response = JSON.parse(request.responseText);
			callback(response.id);
		} else {
			falseCallback(request.status);
			throw new Error(request.status);
		}
	});

	request.send(data);
};

const formElems = document.querySelectorAll('.form');

const formHandler = (form) => {
	form.addEventListener('submit', e => {
		e.preventDefault();
		const data = {};

		for (const {name, value} of form.elements) {
			if(name) {
				data[name] = value.trim();
				if(value.trim() === '') return;
			} 
		}
		const formButton = form.elements[form.elements.length - 1];
		formButton.disabled = true;
		formButton.style.cursor = 'not-allowed';

		const smallElement = document.createElement('small');
		smallElement.style.fontSize = '16px';

		sendData(JSON.stringify(data), 
		(id) => {
			smallElement.textContent = 'Ваша заявка №' + id + ' отправлена';
			smallElement.style.color = '#00ff2e';
			form.append(smallElement);
		}, 
		(err) => {
			smallElement.textContent = 'Ошибка ' + err + ' Заявка не отправлена';
			smallElement.style.color = '#ff0027';
			form.append(smallElement);
		});
		setTimeout(() => {
			smallElement.remove();
			formButton.disabled = false;
			formButton.style.cursor = 'pointer';
		}, 5000);
		form.reset();
	});
};

formElems.forEach(formHandler);

