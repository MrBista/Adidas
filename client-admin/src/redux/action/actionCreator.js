import { PRODUCT_FAILED, PRODUCT_PENDING, PRODUCT_SUCCESS } from './actionType';

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

export { fetchProductFailed, fetchProductPending, fetchProductSuccess };
