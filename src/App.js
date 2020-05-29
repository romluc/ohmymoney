import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

import Loading from './components/Loading';

import GlobalStyle, {
  OuterContainer,
  Container,
  Title,
  Separator,
} from './styles';

const url = 'https://mymoney-romluc.firebaseio.com/movimentacoes/2020-05.json';

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

const App = () => {
  const [data, dispatch] = useReducer(reducer, {
    loading: true,
    data: {},
  });

  useEffect(() => {
    axios.get(url).then((res) => {
      // setData({
      //   loading: false,
      //   data: res.data,
      // });
      dispatch({ type: 'SUCCESS', data: res.data });
    });
  }, []);
  return (
    <>
      <Helmet>
        <link
          href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <GlobalStyle />
      <OuterContainer>
        <Container>
          <Title fontSize={2}>My Money</Title>
          <Separator />
          {data.loading ? (
            <Loading />
          ) : (
            <pre>{JSON.stringify(data, null, 2)}</pre>
          )}
        </Container>
      </OuterContainer>
    </>
  );
};

export default App;
