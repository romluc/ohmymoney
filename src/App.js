import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Home from './components/Home';

import GlobalStyle from './styles/global';

const url = 'https://mymoney-romluc.firebaseio.com/movimentacoes.json';

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
      <Home />
      {JSON.stringify(data)}
    </>
  );
};

export default App;
