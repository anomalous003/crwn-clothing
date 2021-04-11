import logger from 'redux-logger';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk'

import { persistStore } from 'redux-persist'
import { createStore, applyMiddleware } from 'redux';

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));
export const persister = persistStore(store)