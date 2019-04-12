/* eslint-disable require-jsdoc */
import App, { Container } from 'next/app';
import React from 'react';

import withReduxStore from '../lib/with-redux-store';
import { Provider } from 'react-redux';

class MyApp extends App {
	render() {
		const { Component, reduxStore, pageProps } = this.props;
		return (
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
	}
}

export default withReduxStore(MyApp);
