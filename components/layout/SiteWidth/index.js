import React from 'react';
import PropTypes from 'prop-types'

import './index.scss';

const SiteWidth = React.forwardRef((props, ref) => {
	const {
		className,
		children,
	} = props;

	const baseClass = 'site-width';
	const classes = [
		baseClass,
		className,
	].filter(Boolean).join(' ');

	return (
		<div className={classes} ref={ref}>
			{children}
		</div>
	);
});

SiteWidth.defaultProps = {
	className: '',
};

SiteWidth.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

export default SiteWidth;
