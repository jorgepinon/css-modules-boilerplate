import React from 'react'
import style from './button.scss'

export default class Button extends React.Component {
	render() {
		return (
			<button className={style.btnPrimary}>{this.props.text}</button>
		)
	}
}