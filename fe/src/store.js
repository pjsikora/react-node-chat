import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import socketMiddleware from './middleware/socketMiddleware';

// const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer, 
    composeEnhancers(applyMiddleware(socketMiddleware))
)

export default store;