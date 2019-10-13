import { createStore, compose } from 'redux';
import reducers from './reducers/browser';

const composeEnhancers = ((typeof window !== 'undefined') && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const storeWithMiddleware = composeEnhancers()(createStore);
const makeStore = initialState => storeWithMiddleware(reducers, initialState);

export default makeStore;
