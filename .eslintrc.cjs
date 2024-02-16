/** @type { import("eslint").Linter.FlatConfig } */
module.exports = {
	root: true,
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:svelte/recommended', 'prettier'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'unused-imports'],
	rules: {
		'import/order': [
			'warn',
			{
				alphabetize: {
					order: 'asc',
				},
				'newlines-between': 'always',
			},
		],
		'import/no-duplicates': 'warn',
		'sort-imports': [
			'warn',
			{
				ignoreDeclarationSort: true,
			},
		],
		'unused-imports/no-unused-imports': 'warn',
		'validate-jsx-nesting/no-invalid-jsx-nesting': 'error',
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte'],
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
		},
	],
}
