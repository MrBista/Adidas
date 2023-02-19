import {
  SHOESFETCH_FAILED,
  SHOESFETCH_PENDING,
  SHOESFETCH_SUCCESS,
  SHOEDETAIL_FAILED,
  SHOEDETAIL_PENDING,
  SHOEDETAIL_SUCCESS,
} from '../action/actionType';

const initialState = {
  data: [],
  isLoading: true,
  errorMsg: '',
  detail: {},
};

const shoeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOESFETCH_PENDING:
      return { ...initialState };
    case SHOESFETCH_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case SHOESFETCH_FAILED:
      return { ...state, isLoading: false, errorMsg: action.payload };
    case SHOEDETAIL_PENDING:
      return { ...initialState };
    case SHOEDETAIL_SUCCESS:
      return { ...state, isLoading: false, detail: action.payload };
    case SHOEDETAIL_FAILED:
      return { ...state, isLoading: false, errMsg: action.payload };
    default:
      return state;
  }
};

export default shoeReducer;
