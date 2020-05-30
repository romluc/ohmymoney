import React from 'react';
import useDelete from './useDelete';
import Loading from './components/Loading';

import Rest from './Rest';

import GlobalStyle, {
  OuterContainer,
  Container,
  Title,
  Separator,
} from './styles';

const url = 'https://mymoney-romluc.firebaseio.com/movimentacoes/2020-05.json';
const baseURL = 'https://mymoney-romluc.firebaseio.com/';
const { useGet, usePost } = Rest(baseURL);

const App = () => {
  const data = useGet(`movimentacoes/2020-05`);
  const [postData, post] = usePost(`movimentacoes/2020-05`);
  const [deleteData, remove] = useDelete();

  const saveNew = (data) => {
    post({ valor: 12, descricao: 'agua' });
  };

  const doRemove = () => {
    remove(
      'https://mymoney-romluc.firebaseio.com/movimentacoes/2020-05/-M8XDCpJ9RMjmzhJzkrQ.json'
    );
  };

  return (
    <>
      <GlobalStyle />
      <OuterContainer>
        <Container>
          <Title fontSize={2}>Oh My Money!</Title>
          <Separator />
          {data.loading && <Loading />}
          <button onClick={doRemove}>Delete</button>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <button onClick={saveNew}>Save</button>
          <pre>{JSON.stringify(postData)}</pre>
          <pre>{JSON.stringify(deleteData)}</pre>
        </Container>
      </OuterContainer>
    </>
  );
};

export default App;
