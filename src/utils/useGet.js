import { useReducer, useEffect } from 'react';
import axios from 'axios';

let INITIAL_STATE = {
  loading: true,
  data: {},
};

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

const useGet = (url) => {
  const [data, dispatch] = useReducer(reducer, INITIAL_STATE);
  useEffect(() => {
    dispatch({ type: 'REQUEST' });
    axios.get(url).then((res) => {
      dispatch({ type: 'SUCCESS', data: res.data });
    });
  }, [url]);

  return data;
};

export default useGet;
