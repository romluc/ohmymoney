import { useReducer } from 'react';
import axios from 'axios';

const reducer = (state, action) => {
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

const useDelete = (url) => {
  const [data, dispatch] = useReducer(reducer, {
    loading: true,
    data: {},
  });
  const remove = (url) => {
    dispatch({ type: 'REQUEST' });
    axios.delete(url).then(() => {
      dispatch({
        type: 'SUCCESS',
      });
    });
  };
  return [data, remove];
};

export default useDelete;
