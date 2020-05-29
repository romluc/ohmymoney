import { useReducer, useEffect } from 'react';
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

const useGet = (url) => {
  const [data, dispatch] = useReducer(reducer, {
    loading: true,
    data: {},
  });
  useEffect(() => {
    dispatch({ type: 'REQUEST' });
    axios.get(url).then((res) => {
      dispatch({ type: 'SUCCESS', data: res.data });
    });
  }, [url]);

  return data;
};

export default useGet;
