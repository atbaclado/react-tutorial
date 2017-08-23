import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './App';
import LoginControl from './Toggle';
import Page from './Warning';
import Calculator from './Temperature';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
	<div>
		<Clock />
		<LoginControl />
		<Page />
		<Calculator />
	</div>,
	document.getElementById('root')
);

registerServiceWorker();