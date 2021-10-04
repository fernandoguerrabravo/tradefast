// Internet Explorer 11 requires polyfills and partially supported by this project.
// import 'react-app-polyfill/ie11';
// import 'react-app-polyfill/stable';
import ReactDOM from 'react-dom';
import 'typeface-poppins';
import './i18n';
import './react-chartjs-2-defaults';
import './styles/app-base.css';
import './styles/app-components.css';
import './styles/app-utilities.css';
import App from 'app/App';
import { Auth0Provider } from '@auth0/auth0-react';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<Auth0Provider
		domain="eclprojects.us.auth0.com"
		clientId="dbHC9DrhkHt4W9ohZDUPKky2BFkjJuYi"
		redirectUri={window.location.origin}
	>
		<App />,
	</Auth0Provider>,

	document.getElementById('root')
);

reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
