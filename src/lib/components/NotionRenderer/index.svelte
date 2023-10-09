<script>
	import CodeBlock from './CodeBlock.svelte';
	import Text from './Text.svelte';

	export let blocks;
</script>

{#each blocks as block}
	{#if block.type === 'header'}
		<h1 class="title !text-3xl">{block.properties.title[0][0]}</h1>
	{:else if block.type === 'page'}
		<h1 class="title !text-3xl">{block.properties.title[0][0]}</h1>
	{:else if block.type === 'sub_header'}
		<h2 class="title !text-2xl">{block.properties.title[0][0]}</h2>
	{:else if block.type === 'sub_sub_header'}
		<h3 class="title !text-xl">{block.properties.title[0][0]}</h3>
	{:else if block.type === 'text'}
		<Text {block} />
	{:else if block.type === 'divider'}
		<hr class="w-full my-2 mx-0 p-0 border-t-0 border-gray-500" />
	{:else if block.type === 'quote'}
		<blockquote class="blockquote">
			{block.properties.title[0][0]}
		</blockquote>
	{:else if block.type === 'code'}
		<CodeBlock code={block.properties.title[0][0]} language={block.properties.language[0][0]} />
	{/if}
{/each}

<style>
	.blockquote {
		border-left-width: 8px;
		border-left-color: rgb(var(--color-secondary-500) / var(--tw-border-opacity));
		padding-right: 1rem;
		padding-left: 1rem;
		font-size: 1rem;
		line-height: 1.5rem;
		font-style: italic;
		color: rgba(var(--theme-font-color-base));
	}

	.title {
		width: 100%;
		font-size: 2.5em;
		font-weight: 650;
		margin: 20px auto;
		line-height: 1.2;
	}
</style>
