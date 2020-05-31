import React from 'react';
import Rest from './Rest';
import Months from './Months';
import AddMonth from './AddMonth';
import Header from './elements/Header';

const baseURL = 'https://mymoney-romluc.com.firebase.io/';
const { useGet, usePost, useDelete } = Rest(baseURL);

const App = () => {
  // const data = useGet(`2020-05`);
  // const [postData, post] = usePost(`movimentacoes/2020-05`);
  // const [deleteData, remove] = useDelete();

  const saveNew = (data) => {
    // post({ valor: 12, descricao: 'agua' });
  };

  const doRemove = () => {
    // remove(
    //   'https://mymoney-romluc.firebaseio.com/movimentacoes/2020-05/-M8XDCpJ9RMjmzhJzkrQ.json'
    // );
  };

  return (
    <>
      <Header />
      <AddMonth />
      <Months />
    </>
  );
};

export default App;
