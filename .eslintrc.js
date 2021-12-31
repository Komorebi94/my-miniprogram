module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint',
		sourceType: 'module'
	},
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	extends: ["taro/react"],
	rules: {
		'indent': ["error", 4, {
            'SwitchCase': 1
        }],
		'react/jsx-indent': ['error', 4],
        "react/jsx-indent-props": ['error', 4],
        "import/first": "off",
        "react/sort-comp": "off",
		"react/jsx-uses-react": "off",
		"react/react-in-jsx-scope": "off"
	}
}
