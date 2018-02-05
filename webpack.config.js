var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var locals = {
	routes: [
		'/',
	]
}

module.exports = {
	entry: './src',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/build',
		libraryTarget: 'umd',
	},
	module: {
		loaders: [
			{
				test: /\.js/,
				loader: 'babel-loader',
				include: __dirname + '/src', //only for our own js, nothing in node_modules
			},
			{
				test: /\.css$/,
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
					]
				})
			},

		],
	},
	plugins: [
		new ExtractTextPlugin({ filename: 'screen.css', allChunks: true }),
		new StaticSiteGeneratorPlugin('main', locals.routes),
	]
}