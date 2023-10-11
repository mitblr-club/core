<script lang="ts">
	export let title;
	export let titleTemplate;
	export let noindex;
	export let nofollow;
	export let robotsProps;
	export let description;

	let robotsParams: string = '';
	if (robotsProps) {
		const {
			nosnippet,
			maxSnippet,
			maxImagePreview,
			maxVideoPreview,
			noarchive,
			noimageindex,
			notranslate,
			unavailableAfter
		} = robotsProps;
</script>

<svelte:head>
	<meta name="robots" content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}${robotsParams}`} />
</svelte:head>