import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from '../server/nRoutes';

const Examples = ({ data }) => (
	<>
		<ul>
			{data.map(({ firstName, lastName }, id) => (
				<li key={id}>
					<Link route="user" params={{ id, slug: firstName }}>
						<a>
							{firstName} {lastName}
						</a>
					</Link>
				</li>
			))}
		</ul>
	</>
);

Examples.propTypes = {
	data: PropTypes.any
};

const mapStateToProps = ({ users }) => users;

export default connect(mapStateToProps)(Examples);
