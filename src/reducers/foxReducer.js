import { FETCH_START, FETCH_FAIL, FETCH_SUCCESS } from './../actions';

const initialState = {
  foxImage: `https://randomfox.ca/images/${Math.floor(
    Math.random() * 100
  )}.jpg`,
  isFetching: false,
  error: '',
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        foxImage: '',
        isFetching: true,
        error: '',
      };
    case FETCH_FAIL:
      return {
        ...state,
        foxImage: '',
        isFetching: false,
        error: action.payload,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        foxImage: action.payload,
        isFetching: false,
        error: '',
      };
    default:
      return state;
  }
};
