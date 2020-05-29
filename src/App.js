import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

import GlobalStyle, {
  OuterContainer,
  Container,
  Title,
  Separator,
} from './styles';

const url = 'https://mymoney-romluc.firebaseio.com/movimentacoes/2020-05.json';

const App = () => {
  const [data, setData] = useState({
    loading: true,
    data: {},
  });

  useEffect(() => {
    axios.get(url).then((res) => {
      setData({
        loading: false,
        data: res.data,
      });
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
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </Container>
      </OuterContainer>
    </>
  );
};

export default App;
