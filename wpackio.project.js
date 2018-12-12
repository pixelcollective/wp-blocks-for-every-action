const pkg = require('./package.json');

module.exports = {
	appName: 'everyAction',
	type: 'plugin',
	slug: 'every-action',
	bannerConfig: {
		name: 'every-action',
		author: 'Tiny Pixel Collective, Kelly Mears',
		license: 'MIT',
		link: 'https://tinypixel.io/every-action',
		version: pkg.version,
		copyrightText: 'This software is released under the MIT license. © 2018 Tiny Pixel Colletive, LLC.',
		credit: true,
	},
	files: [
		{
			name: 'blocks',
			entry: {
				editor: ['./src/blocks/editor.js'],
				public: ['./src/blocks/public.js']
			},
			webpackConfig: undefined,
		},
	],
	outputPath: 'scripts',
	hasReact: true,
	hasSass: true,
	hasFlow: false,
	externals: {
		jquery: 'jQuery',
	},
	alias: undefined,
	errorOverlay: true,
	optimizeSplitChunks: true,
	watch: './inc|includes/**/*.php|./src/**/*.js',
	jsBabelOverride: defaults => ({
		...defaults,
		plugins: ['react-hot-loader/babel',
			[
				"transform-react-jsx",
				{
					"pragma": "wp.element.createElement"
				}
			]
		],
	}),
	packageFiles: [
		'inc/**',
		'vendor/**',
		'scripts/**',
		'*.php',
		'*.md',
		'readme.txt',
		'languages/**',
		'layouts/**',
		'LICENSE',
		'*.css',
	],
	// Path to package directory, relative to the root
	packageDirPath: 'package',
};
