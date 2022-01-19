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
