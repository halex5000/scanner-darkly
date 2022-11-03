/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import ReactDOM from 'react-dom/client.js';
import {withLDProvider} from 'launchdarkly-react-client-sdk';
import {render} from 'react-dom';
import App from './App';

const LaunchDarklyProvider = withLDProvider({
	clientSideID: import.meta.env.VITE_CLIENT_SIDE_ID,
})(App);

// eslint-disable-next-line unicorn/prefer-query-selector
const rootElement = document.getElementById('root');
render(<LaunchDarklyProvider/>, rootElement);
