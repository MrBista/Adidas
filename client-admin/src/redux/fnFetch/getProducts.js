import {
  fetchProductFailed,
  fetchProductPending,
  fetchProductSuccess,
} from '../action/actionCreator';

const getProducts = () => {
  return async (dispatch, getAll) => {
    try {
      dispatch(fetchProductPending());
      const res = await fetch('http://localhost:3000', {
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
          access_token: localStorage.getItem('access_token'),
        },
        method: 'get',
      });
      if (!res.ok) {
        throw new Error(res.text());
      }
      const resJson = await res.json();
      dispatch(fetchProductSuccess(resJson));
    } catch (err) {
      dispatch(fetchProductFailed(err));
    }
  };
};

export default getProducts;
