import { join } from 'path';
import type { Config } from 'tailwindcss';
import { skeleton } from '@skeletonlabs/tw-plugin';

const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Inter var, sans-serif',
					{
						fontFeatureSettings: '"cv11", "ss01"',
						fontVariationSettings: '"opsz" 32'
					}
				]
			}
		}
	},
	plugins: [skeleton]
} satisfies Config;

module.exports = config;
