import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SiteWidth from '../../layout/SiteWidth';

const mapDispatchToProps = dispatch => ({
	setWindowHeight: size => dispatch({ type: 'SET_WINDOW_HEIGHT', payload: size }),
	setWindowContentWidths: widths => dispatch({ type: 'SET_WINDOW_WIDTHS', payload: widths }),
});

class MeasureWindow extends Component {
	constructor(props) {
		super(props);
		this.windowWidthRef = React.createRef();
		this.frameWidthRef = React.createRef();
		this.contentWidthRef = React.createRef();
	}

	componentDidMount() {
		window.addEventListener('resize', this.updateSizes);
		window.addEventListener('orientationchange', this.updateSizesWithTimeout);

		this.updateSizes();
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateSizes);
		window.removeEventListener('orientationchange', this.updateSizesWithTimeout);
	}

	updateSizesWithTimeout = () => {
		setTimeout(() => {
			this.updateSizes();
		}, 500);
	}

	updateSizes = () => {
		const { setWindowHeight, setWindowContentWidths } = this.props;

		setWindowHeight(window.innerHeight);

		setWindowContentWidths({
			window: this.windowWidthRef.current.offsetWidth,
			frame: this.frameWidthRef.current.offsetWidth,
			content: this.contentWidthRef.current.offsetWidth,
		});
	}

	render() {
		return (
			<div className="measurements" ref={this.windowWidthRef}>
				<SiteWidth ref={this.frameWidthRef}>
					<div ref={this.contentWidthRef} />
				</SiteWidth>
			</div>
		);
	}
}

MeasureWindow.propTypes = {
	setWindowHeight: PropTypes.func.isRequired,
	setWindowContentWidths: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(MeasureWindow);
