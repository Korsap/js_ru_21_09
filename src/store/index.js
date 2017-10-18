import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import logger from '../middlewares/logger';
import idGenerator from '../middlewares/idGenerator';

const enchancer = applyMiddleware(idGenerator, logger );

const store = createStore(reducer, enchancer);

//dev only
window.store = store;

export default store;