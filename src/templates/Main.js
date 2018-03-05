import React from 'react'
import Head from './components/Head'
import Form from './components/Form/Form'
import TextFieldSection from './components/TextField/Section'
import ButtonSet from './components/Button'

export default class Main extends React.Component {

	render() {
		return (
			<html>
				<Head title="Main.js..." />
				<link rel="stylesheet" href="screen.css" />
				<body>
					{/* content here */}

					<section id="forms">
						<Form />
					</section>

					<TextFieldSection />
					<ButtonSet />

				</body>

			</html>
		)
	}

}