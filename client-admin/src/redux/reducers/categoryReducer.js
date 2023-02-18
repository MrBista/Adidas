import {
  CATEGORY_ADD_FAILED,
  CATEGORY_ADD_PENDING,
  CATEGORY_ADD_SUCCESS,
  CATEGORY_DELETE_FAILED,
  CATEGORY_DELETE_PENDING,
  CATEGORY_DELETE_SUCCESS,
  CATEGORY_EDIT_FAILED,
  CATEGORY_EDIT_PENDING,
  CATEGORY_EDIT_SUCCESS,
  CATEGORY_FAILED,
  CATEGORY_PENDING,
  CATEGORY_SUCCESS,
  CLEAN_ERROR_CATEGORY,
  SINGLE_CATEGORY_FAILED,
  SINGLE_CATEGORY_PENDING,
  SINGLE_CATEGORY_SUCCESS,
} from '../action/actionType';

const initialState = {
  categories: [],
  isLoading: true,
  errMsg: '',
  exactCategory: {},
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_PENDING:
      return { ...state, isLoading: true };
    case CATEGORY_SUCCESS:
      return { ...state, isLoading: false, categories: action.payload };
    case CATEGORY_FAILED:
      return { ...state, isLoading: false, errMsg: action.payload };
    case CATEGORY_ADD_PENDING:
      return { ...state, isLoading: true };
    case CATEGORY_ADD_SUCCESS:
      return { ...state, isLoading: false };
    case CATEGORY_ADD_FAILED:
      return { ...state, isLoading: false, errMsg: action.payload };
    case CATEGORY_DELETE_PENDING:
      return { ...state, isLoading: true };
    case CATEGORY_DELETE_FAILED:
      return { ...state, isLoading: false, errMsg: action.payload };
    case CATEGORY_DELETE_SUCCESS:
      return { ...state, isLoading: false };
    case SINGLE_CATEGORY_PENDING:
      return { ...state, isLoading: true };
    case SINGLE_CATEGORY_SUCCESS:
      return { ...state, isLoading: false, exactCategory: action.payload };
    case SINGLE_CATEGORY_FAILED:
      return { ...state, isLoading: false, errMsg: action.payload };
    case CATEGORY_EDIT_PENDING:
      return { ...state, isLoading: true };
    case CATEGORY_EDIT_FAILED:
      return { ...state, errMsg: action.payload, isLoading: false };
    case CATEGORY_EDIT_SUCCESS:
      return { ...state, isLoading: false };
    case CLEAN_ERROR_CATEGORY:
      return { ...state, errMsg: '' };
    default:
      return state;
  }
};
export default categoryReducer;
