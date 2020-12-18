import { multi } from './air-port-codes-node';
import {UI, ui} from './ui';

// search airport
const searchAirport = document.querySelector('#search');

// add event listner
searchAirport.addEventListener('keyup', e => { 

	ui.inputSpinner();

	const query = e.target.value.trim();

	if (query !== '') {
		// fetch
		const api = multi({
			key: '23d70d8651',
			secret: 'af1791ae8cb8fa2',
			limit: 20
		});

		api.request(query);

		api.onSuccess = data => {
			ui.showResults(data);
		}

		api.onError = err => {
			ui.showAlert(err);
		}

	}

});