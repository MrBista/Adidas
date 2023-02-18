import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import shoeDetailReducer from '../reducers/shoeDetailReducer';
import shoeReducer from '../reducers/shoeReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
// function logger({ getState }) {
//   return (next) => (action) => {
//     console.log('will dispatch', action);

//     // Call the next dispatch method in the middleware chain.
//     const returnValue = next(action);

//     console.log('state after dispatch', getState());

//     // This will likely be the action itself, unless
//     // a middleware further in chain changed it.
//     return returnValue;
//   };
// }

const rootReducer = combineReducers({
  shoes: shoeReducer,
  shoeDetail: shoeDetailReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
export { store };
