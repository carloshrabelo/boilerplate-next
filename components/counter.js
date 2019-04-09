import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { incrementCount, decrementCount, resetCount } from '../store';

const Counter = ({ count, incrementCount, decrementCount, resetCount }) => (
	<>
		<h1>
			Count: <span>{count}</span>
		</h1>
		<button onClick={incrementCount}>+1</button>
		<button onClick={decrementCount}>-1</button>
		<button onClick={resetCount}>Reset</button>
	</>
);

Counter.propTypes = {
	count: PropTypes.any,
	incrementCount: PropTypes.any,
	decrementCount: PropTypes.any,
	resetCount: PropTypes.any
};

const mapStateToProps = ({ count }) => ({ count });
const mapDispatchToProps = dispatch =>
	bindActionCreators({ incrementCount, decrementCount, resetCount }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter);
