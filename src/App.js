import React from 'react';
// import useDelete from './useDelete';
import Loading from './components/Loading';

import Rest from './Rest';

import Header from './elements/Header';

// const url = 'https://mymoney-romluc.firebaseio.com/movimentacoes/2020-05.json';
const baseURL = 'https://mymoney-romluc.firebaseio.com/';
const { useGet } = Rest(baseURL);

const App = () => {
  // const data = useGet(`movimentacoes/2020-05`);
  const data = useGet(`meses/2020-05`);
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
      {/* <Container> */}
      <h2>Add Month</h2>
      <select>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
      </select>
      <select>
        <option value="01">01</option>
        <option value="02">02</option>
      </select>
      <button className="btn btn-secondary">Add Month</button>
      {data.loading && <Loading />}
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button className="btn btn-secondary" onClick={saveNew}>
        Save
      </button>
      <button className="btn btn-secondary" onClick={doRemove}>
        Delete
      </button>
      {/* </Container> */}
    </>
  );
};

export default App;
