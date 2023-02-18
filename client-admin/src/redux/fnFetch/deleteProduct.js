import {
  deleteProductFailed,
  deleteProductPending,
  deleteProductSuccess,
} from '../action/actionCreator';
import getProducts from './getProducts';

const deleteProduct = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(deleteProductPending());
      const res = await fetch(`${import.meta.env.VITE_APP_URL}/${id}`, {
        method: 'delete',
        headers: {
          access_token: localStorage.getItem('access_token'),
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) {
        throw new Error(await res.text());
      }
      await res.json();
      await dispatch(deleteProductSuccess());
      await dispatch(getProducts());
    } catch (err) {
      dispatch(deleteProductFailed(err));
      // console.log(err);
    }
  };
};

export default deleteProduct;
