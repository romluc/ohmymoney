import React from 'react';
import Loading from './elements/Loading';
import Rest from './Rest';

const baseURL = 'https://mymoney-romluc.firebaseio.com/';
const { useGet } = Rest(baseURL);

const Months = () => {
  const data = useGet('transactions/2020-05');
  if (data.loading) {
    return <Loading />;
  }
  console.log(data.data);
  if (Object.keys(data.data).length > 0) {
    return (
      <div className="container">
        <table className="table table-hover mt-4">
          <thead>
            <tr className="table-active">
              <th scope="col">Month</th>
              <th scope="col">Estimated income</th>
              <th scope="col">Income</th>
              <th scope="col">Estimated expenses</th>
              <th scope="col">Expenses</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">2020-05</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr>
              <th scope="row">2020-04</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr>
              <th scope="row">2020-03</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

export default Months;
