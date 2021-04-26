module.exports = {
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1536px',
		},
	},

	variants: {},
	plugins: [],
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: [
			'components/**/*.vue',
			'layouts/**/*.vue',
			'pages/**/*.vue',
			'plugins/**/*.js',
			'nuxt.config.js',
			// TypeScript
			'plugins/**/*.ts',
			'nuxt.config.ts',
		],
	},
};
