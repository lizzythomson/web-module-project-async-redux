import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const fetchSuccess = (fox) => {
  return { type: FETCH_SUCCESS, payload: fox };
};

export const fetchFail = (errorMessage) => {
  return { type: FETCH_FAIL, payload: errorMessage };
};

export const getFox = () => (dispatch) => {
  dispatch(fetchStart());
  axios
    .get(`https://randomfox.ca/images/${Math.floor(Math.random() * 100)}.jpg`)
    .then((resp) => {
      dispatch(fetchSuccess(resp.data.results[0]));
    })
    .catch((err) => {
      dispatch(fetchFail(err));
    });
};
