var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var locals = {
	routes: [
		'/',
	]
}

const rules = [
	{
		test: /\.js/,
		loader: 'babel-loader',
		include: __dirname + '/src', //only for our own js, nothing in node_modules
	},
	{
		test: /\.css$/,
		use: ExtractTextPlugin.extract({
			fallback: [{
				loader: 'style-loader',
			}],
			use: [
				{
					loader: 'css-loader',
					options: {
						modules: true,
						localIdentName: '[name]__[local]__[hash:base64:5]',
					}
				},
			]
		})
	},
	{
		test: /\.scss/,
		exclude: /node_modules/,
		use: ExtractTextPlugin.extract({
			fallback: 'style-loader',

			use: [
				{
					loader: 'css-loader',
					options: {
						modules: true,
						localIdentName: '[name]__[local]__[hash:base64:5]',
					}
				},
				{
					loader: 'sass-loader' // compiles SASS to CSS
				}
			]
		})
	}

];


module.exports = {
	entry: './src',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/build',
		libraryTarget: 'umd',
	},
	module: {
		rules,
	},
	plugins: [
		new ExtractTextPlugin({ filename: 'screen.css', allChunks: true }),
		new StaticSiteGeneratorPlugin('main', locals.routes),
	]
}