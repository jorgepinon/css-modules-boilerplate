import React from 'react'
import styles from './Form.scss'
import TextField from '../TextField/TextField'

export default class Form extends React.Component {

	render() {
		return(
			<form action="nothing">
				<legend>LEGEND</legend>

				<div class="form-control">
					<TextField placeholder="text field module inside of a form module" />
				</div>

			</form>
		)
	}

}
