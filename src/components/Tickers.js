import React, { Component } from 'react';
import './Tickers.css';
import Cryptocurrency from './Cryptocurrency';
import axios from 'axios';

class Tickers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
	                id: "IDR",
	                name: "Rupiah",
	                symbol: "Rp",
	                kurs: "1",
	            },
	            {
	                id: "SGD",
	                name: "Singapore Dollar",
	                symbol: "$",
	                kurs: "1",
	            },
	            {
	                id: "JYP",
	                name: "Japan Yen",
	                symbol: "¥",
	                kurs: "1",
	            },
			]
		}
	}
	componentDidMount() {
	    this.fetchCryptocurrencyData();
	    this.interval = setInterval(() => this.fetchCryptocurrencyData(), 1000 * 1000);
    }
    fetchCryptocurrencyData() {
        axios.get("https://api.fixer.io/latest?base=USD")
            .then(response => {
                var wanted = ["IDR", "SGD", "JPY"];
                var result = response.data.rates;
                var res = Object.keys(result).map(function(k) { 
				    return {id: k, value:result[k]};
				  });
                // this.setState({ data: result});
                console.log(res);
            })
            .catch(err => console.log(err));
    }
	render() {
		var tickers = this.state.data.map((currency) =>
			<Cryptocurrency data={currency} key={currency.id} />
		);
		return (
			<div className="tickers-container">
				<ul className="tickers">{tickers}</ul>
				<p>Information updated every 10 seconds.</p>
			</div>
		);
	}
}

export default Tickers;