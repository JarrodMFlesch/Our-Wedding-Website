import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
	headerHeight: state.headerHeight,
});

const HeaderSpacer = (props) => {
	const {
		className,
		headerHeight,
	} = props;

	const baseClass = 'header-spacer';
	const classes = [
		baseClass,
		className,
	].filter(Boolean).join(' ');

	return (
		<div className={classes} style={{ height: `${headerHeight}px` }} />
	);
};

HeaderSpacer.defaultProps = {
	className: '',
	headerHeight: 0,
};

HeaderSpacer.propTypes = {
	className: PropTypes.string,
	headerHeight: PropTypes.number,
};

export default connect(mapStateToProps)(HeaderSpacer);
