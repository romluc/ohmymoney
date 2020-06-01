import React from 'react';

import Rest from '../../utils/Rest';

const baseURL = 'https://mymoney-romluc.firebaseio.com/';
const { useGet } = Rest(baseURL);

const Transactions = ({ match }) => {
  const data = useGet(`transactions/${match.params.date}`);
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
          {Object.keys(data.data).map((transaction) => {
            return (
              <tr key={data.data[transaction]}>
                <td>{data.data[transaction].description}</td>
                <td>{data.data[transaction].value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
