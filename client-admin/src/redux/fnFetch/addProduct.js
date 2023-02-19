import {
  postProductFailed,
  postProductPending,
  postProductSuccess,
} from '../action/actionCreator';
import getProducts from './getProducts';

const postProduct = (productForm, inputImages) => {
  return async (dispatch, getState) => {
    try {
      dispatch(postProductPending());
      const images = inputImages.map((el) => {
        return { imgUrl: el };
      });
      const res = await fetch(import.meta.env.VITE_APP_URL + '/add', {
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.getItem('access_token'),
        },
        body: JSON.stringify({ ...productForm, images }),
        method: 'post',
      });
      if (!res.ok) {
        // throw new Error(await res.text());
        throw await res.text();
      }
      const resJson = await res.json();
      dispatch(postProductSuccess(resJson));
      // console.log(resJson, '<====== gagal kah?');
      // dispatch(getProducts());
    } catch (err) {
      dispatch(postProductFailed(JSON.parse(err)));
      throw err;
    }
  };
};

export default postProduct;
