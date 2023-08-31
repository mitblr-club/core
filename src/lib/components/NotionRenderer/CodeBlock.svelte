<script>
	import hljs from 'highlight.js';
	import { CodeBlock, storeHighlightJs } from '@skeletonlabs/skeleton';

	storeHighlightJs.set(hljs);

	export let code;
	export let language;
</script>

<CodeBlock {code} {language} />
