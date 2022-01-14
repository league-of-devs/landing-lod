import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import windi from 'vite-plugin-windicss/dist/index.mjs';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			plugins: [
				windi(),
			]
	},

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
