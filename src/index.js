import styles from './screen.scss'

import React from 'react'
import ReactDomServer from 'react-dom/server'
import Main from './templates/Main.js'


module.exports = function render(locals, callback) {

	var html = ReactDomServer.renderToStaticMarkup(React.createElement(Main, locals))

	callback( null, '<!Doctype html>' + html)

}