import {
  CLEAN_ERROR,
  PRODUCT_ADD_FAILED,
  PRODUCT_ADD_PENDING,
  PRODUCT_ADD_SUCCESS,
  PRODUCT_DELETE_FAILED,
  PRODUCT_DELETE_PENDING,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_EDIT_FAILED,
  PRODUCT_EDIT_PENDING,
  PRODUCT_EDIT_SUCCESS,
  PRODUCT_FAILED,
  PRODUCT_PENDING,
  PRODUCT_SUCCESS,
  SINGLE_PRODUCT_FAILED,
  SINGLE_PRODUCT_PENDING,
  SINGLE_PRODUCT_SUCCESS,
} from '../action/actionType';

const initialState = {
  products: [],
  isLoading: false,
  errMsg: '',
  successAdd: '',
  exactProduct: {},
  isLoadingPost: false,
  isLoadingEdit: false,
  isLoadingDetail: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_PENDING:
      return { ...state, isLoading: true };
    case PRODUCT_SUCCESS:
      return { ...state, isLoading: false, products: action.payload };
    case PRODUCT_FAILED:
      return { ...state, isLoading: false, errMsg: action.payload };
    case PRODUCT_ADD_PENDING:
      return { ...state, isLoading: true, isLoadingPost: true };
    case PRODUCT_ADD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoadingPost: false,
        successAdd: action.payload,
      };
    case PRODUCT_ADD_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        isLoadingPost: false,
      };
    case PRODUCT_DELETE_PENDING:
      return { ...state, isLoading: true };
    case PRODUCT_DELETE_FAILED:
      return { ...state, isLoading: false, errMsg: action.payload };
    case PRODUCT_DELETE_SUCCESS:
      return { ...state, isLoading: false };
    case SINGLE_PRODUCT_PENDING:
      return { ...state, isLoadingDetail: true };
    case SINGLE_PRODUCT_SUCCESS:
      return { ...state, isLoadingDetail: false, exactProduct: action.payload };
    case SINGLE_PRODUCT_FAILED:
      return { ...state, isLoadingDetail: false, errMsg: action.payload };
    case PRODUCT_EDIT_PENDING:
      return { ...state, isLoadingEdit: true };
    case PRODUCT_EDIT_FAILED:
      return { ...state, errMsg: action.payload, isLoadingEdit: false };
    case PRODUCT_EDIT_SUCCESS:
      return { ...state, isLoadingEdit: false };
    case CLEAN_ERROR:
      return { ...state, errMsg: '' };
    default:
      return state;
  }
};

export default productReducer;
