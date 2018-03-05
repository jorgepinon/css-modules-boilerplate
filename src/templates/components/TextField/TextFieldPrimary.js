import React from 'react'
import style from './TextField.scss'

export default class TextFieldPrimary extends React.Component {
	render() {
		return (
			<input type="text" className={style.inputPrimary} defaultValue={this.props.value} placeholder={this.props.placeholder} />
		)
	}
}