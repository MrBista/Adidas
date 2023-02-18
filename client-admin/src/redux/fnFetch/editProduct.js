import {
  editProductFailed,
  editProductPending,
  editProductSuccess,
} from '../action/actionCreator';
import getProducts from './getProducts';

const editProduct = (id, productForm, inputImages) => {
  return async (dispatch, getState) => {
    try {
      dispatch(editProductPending());
      const images = inputImages.map((el) => {
        return { imgUrl: el };
      });
      const res = await fetch(`${import.meta.env.VITE_APP_URL}/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.getItem('access_token'),
        },
        body: JSON.stringify({ ...productForm, images }),
        method: 'put',
      });
      if (!res.ok) {
        throw await res.text();
      }
      await res.json();
      dispatch(editProductSuccess());
    } catch (err) {
      dispatch(editProductFailed(JSON.parse(err)));
      console.log(err);
      throw err;
    }
  };
};
export default editProduct;
