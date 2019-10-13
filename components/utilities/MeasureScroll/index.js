import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import throttle from 'lodash/throttle';

const mapStateToProps = state => ({
	scrollPos: state.scrollPos,
});

const mapDispatchToProps = dispatch => ({
	updateScroll: pos => dispatch({ type: 'UPDATE_SCROLL', payload: pos }),
});

class MeasureScroll extends Component {
	componentDidMount() {
		if ('scrollRestoration' in window.history) {
			window.history.scrollRestoration = 'manual';
		}

		window.addEventListener('scroll', throttle(this.onScroll, 40));
	}

	onScroll = () => {
		const { updateScroll } = this.props;

		updateScroll(window.pageYOffset);
	}

	render() {
		return null;
	}
}

MeasureScroll.propTypes = {
	updateScroll: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MeasureScroll);
