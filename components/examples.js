import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Clock from './clock';
import Counter from './counter';

const Examples = ({ lastUpdate, light }) => (
	<>
		<Clock lastUpdate={lastUpdate} light={light} />
		<Counter />
	</>
);

Examples.propTypes = {
	lastUpdate: PropTypes.any,
	light: PropTypes.bool
};

const mapStateToProps = ({ lastUpdate, light }) => ({ lastUpdate, light });

export default connect(mapStateToProps)(Examples);
