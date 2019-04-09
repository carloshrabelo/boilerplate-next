import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './style.scss';
import { format } from './fn';

const Clock = ({ lastUpdate, light }) => (
	<div className={classNames(style.clock, { [style.light]: light })}>
		{format(new Date(lastUpdate))}
	</div>
);

Clock.propTypes = {
	lastUpdate: PropTypes.any,
	light: PropTypes.bool
};

export default Clock;
