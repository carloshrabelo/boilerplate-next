import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Examples = ({ data }) => (
	<>
		<ul>
			{data.map(({ email }, i) => (
				<li key={i}>{email}</li>
			))}
		</ul>
	</>
);

Examples.propTypes = {
	data: PropTypes.any
};

const mapStateToProps = ({ users }) => users;

export default connect(mapStateToProps)(Examples);
