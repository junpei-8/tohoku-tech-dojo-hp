const PROD = process.env.NODE_ENV === 'production';

module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parser: '@typescript-eslint/parser',
	plugins: ['svelte3', '@typescript-eslint', 'import'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript'),
	},
	rules: {
		'no-console': PROD ? 'warn' : 'off',
		'no-debugger': PROD ? 'warn' : 'off',

		'@typescript-eslint/no-namespace': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{ prefer: 'type-imports' },
		],
		'import/order': [
			'warn',
			{
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
					'object',
					'type',
				],
				pathGroups: [
					{
						pattern: '@/**',
						group: 'internal',
						position: 'before',
					},
				],
				pathGroupsExcludedImportTypes: ['builtin'],
				alphabetize: { order: 'asc' },
				'newlines-between': 'never',
			},
		],
		'import/no-unresolved': 'off',
		'import/named': 'off',
	},
};
