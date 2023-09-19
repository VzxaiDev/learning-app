import { json, error } from '@sveltejs/kit';

const db = {
	1000: {
		version: 1.0,
		set: {
			title: 'French Unit 6'
		},
		terms: [
			{
				term: 'un pomme',
				definitions: [{ type: 'string', value: 'an apple' }]
			}
		]
	}
};

export function GET({ url }) {
	const id = url.searchParams.get('id');

	if (id === null) {
		throw error(400, 'Missing required ID for set. Use a id url param to request the correct id!');
	}

	if (db[id] === undefined) {
		throw error(404, 'Could not find set with requsted id.');
	}

	return json(db[id]);
}
