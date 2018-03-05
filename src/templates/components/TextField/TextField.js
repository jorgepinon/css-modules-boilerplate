import React from 'react'
import style from './TextField.scss'

export default class TextField extends React.Component {
	render() {
		return (
			<input type="text" defaultValue={this.props.value} placeholder={this.props.placeholder} />
		)
	}
}