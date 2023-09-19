export async function load({ fetch, url }) {
	let id = url.searchParams.get('id');

	if (id === null) {
		id = 1000;
	}

	const res = await fetch(`/api/getSet?id=${id}`);
	const item = await res.json();

	return { item };
}
