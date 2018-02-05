import React from 'react'

export default class Head extends React.Component {
	render() {
		return (
			<head>
				<meta charset="UTF-8" />
				<title>{this.props.title}</title>
			</head>
		)
	}
}