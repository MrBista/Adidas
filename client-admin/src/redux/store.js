import {
  combineReducers,
  applyMiddleware,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';
import productReducer from './reducers/productsReducer';
import categoryReducer from './reducers/categoryReducer';

function logger({ getState }) {
  return (next) => (action) => {
    console.log('will dispatch', action);

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);

    console.log('state after dispatch', getState());

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
}
const rootStore = combineReducers({
  product: productReducer,
  category: categoryReducer,
});

const store = createStore(rootStore, applyMiddleware(logger, thunk));

export default store;
