const defaultState = {
	windowWidth: 375,
	frameWidth: 0,
	contentWidth: 0,
	windowHeight: 600,
	queryParams: {},
	mask: false,
	scrollPos: 0,
	allowCookies: false,
	showCookieBanner: false,
};

const browser = (state = defaultState, action) => {
	switch (action.type) {
		case 'SET_HEADER_HEIGHT':
			return {
				...state,
				headerHeight: action.payload,
			};

		case 'SET_WINDOW_WIDTHS':
			return {
				...state,
				windowWidth: action.payload.window,
				frameWidth: action.payload.frame,
				contentWidth: action.payload.content,
			};

		case 'SET_WINDOW_HEIGHT':
			return {
				...state,
				windowHeight: action.payload,
			};

		case 'SET_QUERY_PARAMS':
			return {
				...state,
				queryParams: action.payload,
			};

		case 'SET_MASK':
			return {
				...state,
				mask: action.payload,
			};

		case 'UPDATE_SCROLL':
			return {
				...state,
				scrollPos: action.payload,
			};

		case 'SET_COOKIE_CONSENT':
			return {
				...state,
				allowCookies: action.payload,
			};

		case 'SHOW_COOKIE_BANNER':
			return {
				...state,
				showCookieBanner: action.payload,
			};

		default:
		//
	}

	return state;
};

export default browser;
