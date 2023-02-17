import {
  CATEGORY_FAILED,
  CATEGORY_PENDING,
  CATEGORY_SUCCESS,
} from '../action/actionType';

const initialState = {
  categories: [],
  isLoading: true,
  errMsg: '',
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_PENDING:
      return { ...initialState };
    case CATEGORY_SUCCESS:
      return { ...state, isLoading: false, categories: action.payload };
    case CATEGORY_FAILED:
      return { ...state, isLoading: false, errMsg: action.payload };
    default:
      return state;
  }
};
export default categoryReducer;
