import {applyMiddleware, createStore} from 'redux';
import reducers from './reducers';
import customMiddleware from './middlewares';

const middlewares = applyMiddleware(...customMiddleware);

export default createStore(reducers, middlewares);
