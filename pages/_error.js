import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import SiteWidth from '../components/layout/SiteWidth';

const Error = ({ status }) => {

	return (
		<SiteWidth>
			<p>Status {status}</p>
		</SiteWidth>
	);
};

Error.getInitialProps = async (ctx, status) => {
	return { status: status || 404 };
};

Error.propTypes = {
	status: PropTypes.number.isRequired,
};

export default Error;
