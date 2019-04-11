import { Container } from 'next/app';
import React from 'react';
import withReduxStore from '../lib/with-redux-store';
import { Provider } from 'react-redux';

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps, reduxStore }) => (
	<>
		{/* <Hack */}
		<div style={{ display: 'none' }}>{undefined ? '.' : '.'}</div>
		{/* Hack> */}
		<Container>
			<Provider store={reduxStore}>
				<Component {...pageProps} />
			</Provider>
		</Container>
	</>
);

export default withReduxStore(MyApp);
