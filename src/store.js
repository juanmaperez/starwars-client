import rootReducer from 'reducers';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
	return createStore(
		rootReducer,
		composeEnhancers(applyMiddleware(thunk)),
	);
};
