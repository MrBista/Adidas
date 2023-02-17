import {
  fetchCategoryFailed,
  fetchCategoryPending,
  fetchCategorySuccess,
} from '../action/actionCreator';

const getCategory = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchCategoryPending());
      const res = await fetch('http://localhost:3000/categories', {
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
      dispatch(fetchCategorySuccess(resJson));
    } catch (err) {
      dispatch(fetchCategoryFailed(err));
    }
  };
};

export default getCategory;
