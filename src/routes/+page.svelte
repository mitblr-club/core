<script>
	import { fetchPage, NotionRenderer } from '$lib/index.js';

	const fetchImage = (async () => {
		const pageId = `22ad847497ff4dc4ba389a4c5f606d43`;
		return await fetchPage({ id: pageId, context: this });
	})();
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

{#await fetchImage}
	<p>...waiting</p>
{:then blocks}
	<NotionRenderer {blocks} />
{:catch error}
	<p>An error occurred!</p>
{/await}

<style lang="postcss">
	h1:after {
		content: '';
		position: absolute;
		height: 120%;
		width: 240%;
		background: white;
		left: 0;
		z-index: -1;
		transform: skew(7deg, -2deg);
	}
	h1 {
		position: relative;
		color: black;
		width: auto;
		display: inline-block;
		margin-bottom: 6rem;
	}
	ul {
		padding: 0;
		margin: 0;
		list-style: none;
	}
	li {
		margin-bottom: 3rem;
	}

	a {
		font-size: 2rem;
	}
	:global(hr) {
		background: white;
	}
</style>
