const defaultState = {
  windowWidth: 0,
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

    case 'SET_RSVP_HEIGHT':
      return {
        ...state,
        rsvpHeight: action.payload,
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

    case 'UPDATE_SCROLL':
      return {
        ...state,
        scrollPos: action.payload,
      };

    default:
    //
  }

  return state;
};

export default browser;
