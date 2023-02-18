import {
  combineReducers,
  applyMiddleware,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';
import productReducer from './reducers/productsReducer';
import categoryReducer from './reducers/categoryReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
const rootStore = combineReducers({
  product: productReducer,
  category: categoryReducer,
});

const store = createStore(
  rootStore,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
