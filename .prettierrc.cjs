module.exports = {
	printWidth: 80,
	tabWidth: 2,
	useTabs: true,
	singleQuote: true,
	trailingComma: 'all',

	plugins: [
		require('prettier-plugin-svelte'),
		require('prettier-plugin-jsdoc'),
	],
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],

	jsdocVerticalAlignment: true,
	jsdocCapitalizeDescription: false,
	jsdocPreferCodeFences: true,
	jsdocKeepUnParseAbleExampleIndent: true,
};
