<script>
	import hljs from 'highlight.js/lib/core';
	import java from 'highlight.js/lib/languages/java';
	import { CodeBlock, storeHighlightJs } from '@skeletonlabs/skeleton';

	hljs.registerLanguage('java', java);
	storeHighlightJs.set(hljs);

	export let code;
	export let language;
</script>

<CodeBlock {code} {language} lineNumbers></CodeBlock>
