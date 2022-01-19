import { FETCH_START, FETCH_FAIL, FETCH_SUCCESS } from './../actions';

const initialState = {
  foxImage:
    'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm94fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
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
