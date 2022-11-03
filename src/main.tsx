/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/naming-convention */

import React from 'react';
import ReactDOM from 'react-dom/client.js';
import {withLDProvider, asyncWithLDProvider} from 'launchdarkly-react-client-sdk';
import {render} from 'react-dom';
import App from './App';

// Const LaunchDarklyProvider = withLDProvider({
// 	clientSideID: import.meta.env.VITE_CLIENT_SIDE_ID,
// })(App);

// // eslint-disable-next-line unicorn/prefer-query-selector
// const rootElement = document.getElementById('root');
// render(<LaunchDarklyProvider/>, rootElement);

(async () => {
	const LDProvider = await asyncWithLDProvider({
		clientSideID: import.meta.env.VITE_CLIENT_SIDE_ID,
	});
	render(
		<LDProvider>
			<App/>
		</LDProvider>,
		document.querySelector('#root'),
	);
})();
