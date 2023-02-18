import {
  singleCategoryFailed,
  singleCategoryPending,
  singleCategorySuccess,
} from '../action/actionCreator';

const getSingleCategory = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(singleCategoryPending());
      const res = await fetch(
        import.meta.env.VITE_APP_URL + '/categories/' + id,
        {
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        }
      );
      if (!res) {
        throw new Error(await res.text());
      }
      const resJson = await res.json();
      dispatch(singleCategorySuccess(resJson));
    } catch (err) {
      dispatch(singleCategoryFailed(err));
    }
  };
};

export default getSingleCategory;
