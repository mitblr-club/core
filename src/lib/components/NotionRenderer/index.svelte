<script>
	import CodeBlock from './CodeBlock.svelte';
	import Text from './Text.svelte';

	export let blocks;
</script>

{#each blocks as block}
	{#if block.type === 'header'}
		<h1>{block.properties.title[0][0]}</h1>
	{:else if block.type === 'page'}
		<h2>{block.properties.title[0][0]}</h2>
	{:else if block.type === 'sub_header'}
		<h2>{block.properties.title[0][0]}</h2>
	{:else if block.type === 'sub_sub_header'}
		<h3>{block.properties.title[0][0]}</h3>
	{:else if block.type === 'text'}
		<Text {block} />
	{:else if block.type === 'divider'}
		<hr />
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
</style>
