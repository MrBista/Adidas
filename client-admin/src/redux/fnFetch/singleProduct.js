import {
  singleProductFailed,
  singleProductPending,
  singleProductSuccess,
} from '../action/actionCreator';

const getSingleProduct = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(singleProductPending());
      const res = await fetch(import.meta.env.VITE_APP_URL + '/' + id, {
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      });
      if (!res) {
        throw new Error(await res.text());
      }
      const resJson = await res.json();
      dispatch(singleProductSuccess(resJson));
    } catch (err) {
      dispatch(singleProductFailed(err));
    }
  };
};
export default getSingleProduct;
