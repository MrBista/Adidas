import {
  postCategoryFailed,
  postCategoryPending,
  postCategorySuccess,
} from '../action/actionCreator';
import getCategory from './getCategory';

const postCategory = (category) => {
  return async (dispatch, getState) => {
    try {
      dispatch(postCategoryPending());
      const res = await fetch(import.meta.env.VITE_APP_URL + '/categories', {
        method: 'post',
        headers: {
          access_token: localStorage.getItem('access_token'),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: category }),
      });
      if (!res.ok) {
        throw await res.text();
      }
      dispatch(postCategorySuccess());
    } catch (err) {
      console.log(JSON.parse(err), 'ini error ya');
      dispatch(postCategoryFailed(JSON.parse(err)));
      throw err;
    }
  };
};

export default postCategory;
