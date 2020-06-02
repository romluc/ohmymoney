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

const init = (baseURL) => {
  const useGet = (resource) => {
    const [data, dispatch] = useReducer(reducer, INITIAL_STATE);
    useEffect(() => {
      dispatch({ type: 'REQUEST' });
      axios.get(`${baseURL}${resource}.json`).then((res) => {
        dispatch({ type: 'SUCCESS', data: res.data });
      });
    }, [resource]);

    return data;
  };

  const usePost = (resource) => {
    const [data, dispatch] = useReducer(reducer, INITIAL_STATE);
    const post = async (data) => {
      dispatch({ type: 'REQUEST' });
      const res = await axios.post(`${baseURL}${resource}.json`, data);
      dispatch({
        type: 'SUCCESS',
        data: res.data,
      });
    };
    return [data, post];
  };

  const useDelete = (resource) => {
    const [data, dispatch] = useReducer(reducer, INITIAL_STATE);
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
  return {
    useGet,
    usePost,
    useDelete,
  };
};

export default init;
