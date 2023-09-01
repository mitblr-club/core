const NOTION_API = 'https://api.mitblr.club/v1/page/';

export async function fetchPage({ id, context }) {
	let res;
	if (context) {
		res = await context.fetch(NOTION_API + id);
	} else {
		res = await fetch(NOTION_API + id);
	}
	const post = await res.json();

	const objectArray = Object.entries(post);
	const blocks = objectArray.map(([key, value]) => {
		return value.value;
	});
	return blocks;
}
