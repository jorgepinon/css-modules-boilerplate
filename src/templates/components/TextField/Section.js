import React from 'react'
import style from './TextField.scss'
import TextField from './TextField'
import TextFieldPrimary from './TextFieldPrimary'

export default class TextFieldSection extends React.Component {
	render() {
		return (
			<section id="text-field">
				<TextField placeholder="textfield module inside textfield/section" defaultValue="some value" />

				<TextFieldPrimary />
			</section>
		)
	}
}