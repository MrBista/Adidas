import {
  editCategoryFailed,
  editCategoryPending,
  editCategorySuccess,
} from '../action/actionCreator';
import getCategory from './getCategory';

const editCategory = (id, category) => {
  return async (dispatch, getSTate) => {
    try {
      dispatch(editCategoryPending());
      const res = await fetch(
        import.meta.env.VITE_APP_URL + '/categories/' + id,
        {
          method: 'put',
          headers: {
            access_token: localStorage.getItem('access_token'),
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(category),
        }
      );
      if (!res.ok) {
        throw await res.text();
      }
      await res.json();
      dispatch(editCategorySuccess());
    } catch (err) {
      console.log(err, 'ini dari fets');
      dispatch(editCategoryFailed(JSON.parse(err)));
      throw err;
      // console.log(err);
    }
  };
};

export default editCategory;
