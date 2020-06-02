import React, { useState } from 'react';
import { MdAddCircleOutline } from 'react-icons/md';

import Rest from '../../utils/Rest';

const baseURL = 'https://mymoney-romluc.firebaseio.com/';
const { useGet, usePost } = Rest(baseURL);

const Transactions = ({ match }) => {
  const data = useGet(`transactions/${match.params.date}`);
  const [postData, save] = usePost(`transactions/${match.params.date}`);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0.0);

  const onChangeDescription = (evt) => {
    setDescription(evt.target.value);
  };

  const onChangeValue = (evt) => {
    setValue(parseFloat(evt.target.value) || 0.0);
  };

  const saveTransaction = () => {
    save({
      description,
      value,
    });
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Transactions</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {data.data &&
            Object.keys(data.data).map((transaction) => {
              return (
                <tr key={transaction}>
                  <td>{data.data[transaction].description}</td>
                  <td>{data.data[transaction].value}</td>
                </tr>
              );
            })}
          <tr>
            <td>
              <input
                type="text"
                onChange={onChangeDescription}
                value={description}
              />
            </td>
            <td>
              <input type="text" onChange={onChangeValue} value={value} />
              {<pre>{value}</pre>}
            </td>
          </tr>
          <button onClick={saveTransaction}>
            <MdAddCircleOutline />
          </button>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
