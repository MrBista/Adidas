import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import shoeReducer from '../reducers/shoeReducer';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  shoes: shoeReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export { store };
