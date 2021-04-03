import logger from 'redux-logger';
import rootReducer from './root-reducer';

import {persistStore} from 'redux-persist'
import { createStore, applyMiddleware } from 'redux';

const middleware = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middleware));
export const persister = persistStore(store)