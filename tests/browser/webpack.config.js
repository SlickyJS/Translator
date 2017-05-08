module.exports = {
	entry: {
		app: __dirname + '/index'
	},

	output: {
		path: __dirname + '/public',
		filename: 'tests.js'
	},

	resolve: {
		extensions: ['.ts', '.js', '.json']
	},

	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				query: {
					'configFileName': './tsconfig.json'
				}
			}
		]
	}
};
