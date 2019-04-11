/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';
import { connect } from 'react-redux';
import { fetch } from '../store/users';
import Examples from '../components/examples';

class Index extends React.Component {
	componentDidMount() {
		this.props.fetch();
	}

	render() {
		return <Examples />;
	}
}

const mapDispatchToProps = { fetch };
export default connect(
	null,
	mapDispatchToProps
)(Index);
