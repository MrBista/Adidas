import {
  SHOEDETAIL_FAILED,
  SHOEDETAIL_PENDING,
  SHOEDETAIL_SUCCESS,
  SHOESFETCH_FAILED,
  SHOESFETCH_PENDING,
  SHOESFETCH_SUCCESS,
} from './actionType';

const fetchShoesPending = () => {
  return {
    type: SHOESFETCH_PENDING,
  };
};

const fetchShoesFailed = (err) => {
  return {
    type: SHOESFETCH_FAILED,
    payload: err,
  };
};

const fetchShoesSuccess = (data) => {
  return {
    type: SHOESFETCH_SUCCESS,
    payload: data,
  };
};
const fetchShoeDetailPending = () => {
  return {
    type: SHOEDETAIL_PENDING,
  };
};

const fetchShoeDetailFailed = (err) => {
  return {
    type: SHOEDETAIL_FAILED,
    payload: err,
  };
};

const fetchShoeDetailSuccess = (data) => {
  return {
    type: SHOEDETAIL_SUCCESS,
    payload: data,
  };
};

const getShoes = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchShoesPending());
      const response = await fetch('http://localhost:3000/products');
      if (!response.ok) {
        throw new Error(response.text());
      }
      const resJson = await response.json();
      dispatch(fetchShoesSuccess(resJson));
    } catch (err) {
      dispatch(fetchShoesFailed(err));
    }
  };
};
const getDetailShoe = (slug) => {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchShoeDetailPending());
      const res = await fetch(`http://localhost:3000/products?slug=${slug}`);
      if (!res.ok) {
        throw new Error(res.text());
      }
      const resJson = await res.json();
      dispatch(fetchShoeDetailSuccess(resJson[0]));
    } catch (err) {
      dispatch(fetchShoeDetailFailed(err));
    }
  };
};

export { getShoes, getDetailShoe };
