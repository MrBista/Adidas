import {
  CATEGORY_FAILED,
  CATEGORY_PENDING,
  CATEGORY_SUCCESS,
  PRODUCT_FAILED,
  PRODUCT_PENDING,
  PRODUCT_SUCCESS,
} from './actionType';

// products
const fetchProductPending = () => {
  return {
    type: PRODUCT_PENDING,
  };
};
const fetchProductSuccess = (data) => {
  return {
    type: PRODUCT_SUCCESS,
    payload: data,
  };
};
const fetchProductFailed = (err) => {
  return {
    type: PRODUCT_FAILED,
    payload: err,
  };
};

// category
const fetchCategoryPending = () => {
  return {
    type: CATEGORY_PENDING,
  };
};
const fetchCategorySuccess = (dataJson) => {
  return {
    type: CATEGORY_SUCCESS,
    payload: dataJson,
  };
};
const fetchCategoryFailed = (err) => {
  return {
    type: CATEGORY_FAILED,
    payload: err,
  };
};
export {
  fetchProductFailed,
  fetchProductPending,
  fetchProductSuccess,
  fetchCategoryFailed,
  fetchCategoryPending,
  fetchCategorySuccess,
};
