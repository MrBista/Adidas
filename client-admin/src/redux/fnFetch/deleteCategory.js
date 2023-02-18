import {
  deleteCategoryFailed,
  deleteCategoryPending,
  deleteCategorySuccess,
  deleteProductFailed,
  deleteProductPending,
  deleteProductSuccess,
} from '../action/actionCreator';
import getCategory from './getCategory';

const deleteCategory = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(deleteCategoryPending());
      const res = await fetch(
        `${import.meta.env.VITE_APP_URL}/categories/${id}`,
        {
          method: 'delete',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        }
      );
      if (!res.ok) {
        throw new Error(await res.text());
      }
      await dispatch(deleteCategorySuccess());
      await dispatch(getCategory());
    } catch (err) {
      dispatch(deleteCategoryFailed(err));
    }
  };
};

export default deleteCategory;
