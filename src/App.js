import React, { Component } from 'react';
import Main from './components/MainComponent'
import Particles from 'react-particles-js';

import './App.css';

import { BrowserRouter } from 'react-router-dom'
class App extends Component {

	render() {
		return (
			<BrowserRouter>


				<Particles
					params={{
						"particles": {
							"number": {
								"value": 50
							},
							"size": {
								"value": 3
							}
						},
						"interactivity": {
							"events": {
								"onhover": {
									"enable": true,
									"mode": "repulse"
								}
							}
						}
					}} />


				<Main />


			</BrowserRouter>
		);
	}

}

export default App;
