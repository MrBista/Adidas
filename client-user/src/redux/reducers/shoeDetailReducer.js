import {
  SHOEDETAIL_FAILED,
  SHOEDETAIL_PENDING,
  SHOEDETAIL_SUCCESS,
  SHOESFETCH_FAILED,
  SHOESFETCH_PENDING,
  SHOESFETCH_SUCCESS,
} from '../action/actionType';

const initialState = {
  isLoading: true,
  detail: {},
  errMsg: '',
};

const shoeDetailReducer = (state = initialState, action) => {
  switch (action.type) {
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

export default shoeDetailReducer;
