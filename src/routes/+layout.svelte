<script>
	import '../app.postcss';
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
</script>

<AppShell
	regionPage="relative"
	slotHeader="sticky top-0 z-10 bg-opacity-60 shadow-md backdrop-blur-[5px] backdrop-saturate-[1]"
>
	<svelte:fragment slot="header">
		<AppBar
			padding="px-4 py-3"
			gridColumns="grid-cols-3"
			slotDefault="place-self-center"
			slotTrail="place-content-end"
			background="bg-transparent"
		>
			<svelte:fragment slot="lead">
				<a href="/" aria-label="mitblr.club" class="transition duration-150 hover:opacity-70">
					<h2 class="h2 font-bold">mitblr.club</h2>
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<div class="container mx-auto px-20">
		<slot />
	</div>
	<svelte:fragment slot="footer">
		<footer class="flex flex-col justify-center items-center p-4">
			<p>built using <a href="https://kit.svelte.dev"><b>kit.svelte.dev</b></a></p>
		</footer>
	</svelte:fragment>
</AppShell>
