import adapter from '@sveltejs/adapter-auto';
import { Config } from '@sveltejs/kit';
import { vitePreprocess } from '@sveltejs/kit/vite';

const config = {
	preprocess: [vitePreprocess({})],

	kit: {
		adapter: adapter()
	}
} satisfies Config;

export default config;
