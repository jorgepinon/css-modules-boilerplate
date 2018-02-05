import React from 'react'
import Btn from './Btn'
import BtnPrimary from './BtnPrimary'

export default class Button extends React.Component {
	render() {
		return (
			<section id="button">
				<Btn text=".btn" />
				<BtnPrimary text=".btn--primary" />
			</section>
		)
	}
}