import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootreducer from './reducers';

const initialstate={};

const middleware = [thunk];

const store = createStore(rootreducer,initialstate,composeWithDevTools(applyMiddleware(...middleware)))
// const store = createStore(rootreducer);

export default store;