<script>
	export let block;
</script>

{#if block.properties}
	<p class="w-full break-words whitespace-pre-wrap py-[3px] px-[2px] my-[1px] mx-0">
		{#each block.properties.title as items}
			{#if items.length > 1}
				<a href={items[1][0][1]} target="_blank" rel="noopener">
					{items[0]}
				</a>
			{:else}{items[0]}{/if}
		{/each}
	</p>
{/if}
