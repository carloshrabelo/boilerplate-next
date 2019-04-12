/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';
import { withRouter } from 'next/router';

class Index extends React.Component {
	static getInitialProps({ query: { id, slug } }) {
		return { id, slug };
	}

	render() {
		return (
			<div>
				<h1>
					My {this.props.id} {this.props.slug} blog post
				</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
			</div>
		);
	}
}

export default withRouter(Index);
