import React from 'react';
import Rest from './Rest';
import Months from './Months';
import Header from './elements/Header';

const baseURL = 'https://mymoney-romluc.com.firebase.io/';
const { useGet, usePost, useDelete } = Rest(baseURL);

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
      <div className="container mt-4">
        <label htmlFor="addMonth">Add Month</label>
        <select className="form-group ml-4">
          <option value="2019">2019</option>
          <option value="2020">2020</option>
        </select>
        <select className="form-group mr-4">
          <option value="01">01</option>
          <option value="02">02</option>
        </select>
        <button className="btn btn-secondary btn-sm">Add Month</button>
      </div>
      <Months />
    </>
  );
};

export default App;
