import { createStore } from 'redux';
import combinedReducers from '../reducers/combined-reducers';

const store = createStore(combinedReducers, {});

export default store;
