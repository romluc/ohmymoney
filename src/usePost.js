import { useReducer } from 'react';
import axios from 'axios';

const reducer = (state, action) => {
  console.log('state', state, 'action', action);

  switch (action.type) {
    case 'REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    default:
      return state;
  }
};

const usePost = (url) => {
  const [data, dispatch] = useReducer(reducer, {
    loading: true,
    data: {},
  });
  const post = (data) => {
    dispatch({ type: 'REQUEST' });
    axios.post(url, data).then((res) => {
      dispatch({
        type: 'SUCCESS',
        data: res.data,
      });
    });
  };

  return [data, post];
};

export default usePost;
