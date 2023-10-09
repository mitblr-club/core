<script>
	import { fetchPage, NotionRenderer } from '$lib/index.js';

	let fetchImage = fetchPage({ id: 'fd91bde8672046b8a4516877e1926834' });
</script>

<svelte:head>
	<title>@mitblr.club/core</title>
</svelte:head>

{#await fetchImage}
	<p>...waiting</p>
{:then blocks}
	<NotionRenderer {blocks} />
{/await}
