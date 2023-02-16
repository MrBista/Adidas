import {
  PRODUCT_FAILED,
  PRODUCT_PENDING,
  PRODUCT_SUCCESS,
} from '../action/actionType';

const initialState = {
  products: [],
  isLoading: true,
  errMsg: '',
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_PENDING:
      return { ...initialState };
    case PRODUCT_SUCCESS:
      return { ...state, isLoading: false, products: action.payload };
    case PRODUCT_FAILED:
      return { ...state, isLoading: false, errMsg: action.payload };
    default:
      return state;
  }
};

export default productReducer;
