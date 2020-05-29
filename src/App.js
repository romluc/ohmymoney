import React from 'react';
import usePost from './usePost';
import useGet from './useGet';
import Loading from './components/Loading';

import GlobalStyle, {
  OuterContainer,
  Container,
  Title,
  Separator,
} from './styles';

const url = 'https://mymoney-romluc.firebaseio.com/movimentacoes/2020-05.json';

const App = () => {
  const data = useGet(url);
  const [postData, post] = usePost(url);

  const saveNew = (data) => {
    post({ valor: 12, descricao: 'agua' });
  };

  return (
    <>
      <GlobalStyle />
      <OuterContainer>
        <Container>
          <Title fontSize={2}>Oh My Money!</Title>
          <Separator />
          {data.loading && <Loading />}

          <pre>{JSON.stringify(data, null, 2)}</pre>
          <button onClick={saveNew}>Save</button>
          <pre>{JSON.stringify(postData)}</pre>
        </Container>
      </OuterContainer>
    </>
  );
};

export default App;
