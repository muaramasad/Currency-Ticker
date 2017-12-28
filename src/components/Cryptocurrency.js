import React, { Component } from 'react';
import './Cryptocurrency.css';

class Cryptocurrency extends Component {
	render() {
		var {
			id,
			name,
			symbol,
			kurs
		} = this.props.data;
		return (
			<li className={"cryptocurrency " + id}>
				<p className="cryptocurrency-name">{name} {symbol}</p>
				<h1>{symbol} { (+kurs).toFixed(2)}</h1>
			</li>
		)
	}
}

export default Cryptocurrency;