const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devServer: {
		port: 3000,
		progress: true,
		contentBase: './build',
		compress: true,
	},
	mode: 'development',
	entry: './src/main',
	output: {
		filename: 'bundle.[hash:4].js',
		path: path.resolve('build')
	},
	plugins: [
	new HtmlWebpackPlugin({
		template: './src/index.html',
		filename: 'index.html',
		minify: {
			removeAttrbuteQuotes: true,
			collapseWhitespace: true
		},
		hash: true
	})
	],
	module: {
		rules: [{
			test: /\.css$/,
			use: ['sass-loader', 'style-loader', 'css-loader']
		}, {
			test: /\.scss$/,
			use: [ 'style-loader', 'css-loader', 'sass-loader']
		}]
	}
}