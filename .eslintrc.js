module.exports = {
	env: {
		node: true,
		browser: true,
		es2020: true,
	},
	extends: [`@actualsize/eslint-config/configs/ts-react`],
	parserOptions: {
		project: `./tsconfig.json`,
		tsconfigRootDir: __dirname,
		sourceType: `module`,
	},
};
