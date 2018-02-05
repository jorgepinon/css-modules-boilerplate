import React from 'react'
import Head from './components/Head'
import ButtonSet from './components/Button'

export default class Main extends React.Component {

	render() {
		return (
			<html>
				<Head title="title attr passed as react props" />
				<link rel="stylesheet" href="screen.css" />
				<body>
					{/* content here */}

					<ButtonSet />

				</body>

			</html>
		)
	}

}