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
  CLEAN_ERROR,
  CLEAN_ERROR_CATEGORY,
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
  SINGLE_CATEGORY_FAILED,
  SINGLE_CATEGORY_PENDING,
  SINGLE_CATEGORY_SUCCESS,
  SINGLE_PRODUCT_FAILED,
  SINGLE_PRODUCT_PENDING,
  SINGLE_PRODUCT_SUCCESS,
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

const postProductPending = () => {
  return {
    type: PRODUCT_ADD_PENDING,
  };
};
const postProductSuccess = (msg) => {
  return {
    type: PRODUCT_ADD_SUCCESS,
    payload: msg,
  };
};
const postProductFailed = (errMsg) => {
  return {
    type: PRODUCT_ADD_FAILED,
    payload: errMsg,
  };
};

const deleteProductPending = () => {
  return {
    type: PRODUCT_DELETE_PENDING,
  };
};
const deleteProductSuccess = () => {
  return {
    type: PRODUCT_DELETE_SUCCESS,
  };
};
const deleteProductFailed = (err) => {
  return {
    type: PRODUCT_DELETE_FAILED,
    payload: err,
  };
};

const singleProductPending = () => {
  return {
    type: SINGLE_PRODUCT_PENDING,
  };
};
const singleProductSuccess = (dataJson) => {
  return {
    type: SINGLE_PRODUCT_SUCCESS,
    payload: dataJson,
  };
};
const singleProductFailed = (err) => {
  return {
    type: SINGLE_PRODUCT_FAILED,
    payload: err,
  };
};
const editProductPending = () => {
  return {
    type: PRODUCT_EDIT_PENDING,
  };
};
const editProductSuccess = () => {
  return {
    type: PRODUCT_EDIT_SUCCESS,
  };
};
const editProductFailed = (err) => {
  return {
    type: PRODUCT_EDIT_FAILED,
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

const postCategoryPending = () => {
  return {
    type: CATEGORY_ADD_PENDING,
  };
};
const postCategorySuccess = (msg) => {
  return {
    type: CATEGORY_ADD_SUCCESS,
  };
};
const postCategoryFailed = (errMsg) => {
  return {
    type: CATEGORY_ADD_FAILED,
    payload: errMsg,
  };
};

const deleteCategoryPending = () => {
  return {
    type: CATEGORY_DELETE_PENDING,
  };
};
const deleteCategorySuccess = () => {
  return {
    type: CATEGORY_DELETE_SUCCESS,
  };
};
const deleteCategoryFailed = (err) => {
  return {
    type: CATEGORY_DELETE_FAILED,
    payload: err,
  };
};
const singleCategoryPending = () => {
  return {
    type: SINGLE_CATEGORY_PENDING,
  };
};
const singleCategorySuccess = (dataJson) => {
  return {
    type: SINGLE_CATEGORY_SUCCESS,
    payload: dataJson,
  };
};
const singleCategoryFailed = (err) => {
  return {
    type: SINGLE_CATEGORY_FAILED,
    payload: err,
  };
};
const editCategoryPending = () => {
  return {
    type: CATEGORY_EDIT_PENDING,
  };
};
const editCategorySuccess = () => {
  return {
    type: CATEGORY_EDIT_SUCCESS,
  };
};
const editCategoryFailed = (err) => {
  return {
    type: CATEGORY_EDIT_FAILED,
    payload: err,
  };
};

const cleanAllError = () => {
  return {
    type: CLEAN_ERROR,
  };
};
const cleanAllErrorCategory = () => {
  return {
    type: CLEAN_ERROR_CATEGORY,
  };
};
export {
  fetchProductFailed,
  fetchProductPending,
  fetchProductSuccess,
  postProductFailed,
  postProductPending,
  postProductSuccess,
  deleteProductFailed,
  deleteProductPending,
  deleteProductSuccess,
  singleProductFailed,
  singleProductPending,
  singleProductSuccess,
  editProductFailed,
  editProductPending,
  editProductSuccess,
  fetchCategoryFailed,
  fetchCategoryPending,
  fetchCategorySuccess,
  postCategoryFailed,
  postCategoryPending,
  postCategorySuccess,
  deleteCategoryFailed,
  deleteCategoryPending,
  deleteCategorySuccess,
  singleCategoryFailed,
  singleCategoryPending,
  singleCategorySuccess,
  editCategoryFailed,
  editCategoryPending,
  editCategorySuccess,
  cleanAllError,
  cleanAllErrorCategory,
};
