import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../elements/Loading';
import Rest from '../../Rest';

const baseURL = 'https://mymoney-romluc.firebaseio.com/';
const { useGet } = Rest(baseURL);

const Months = () => {
  const data = useGet('transactions/2020-05');
  if (data.loading) {
    return <Loading />;
  }

  if (Object.keys(data.data).length > 0) {
    console.log(data.data);
    return (
      <>
        <table className="table mt-4">
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
            {Object.keys(data.data).map((month) => {
              return (
                <tr key={month}>
                  <td>
                    <Link to={`/transactions/${month}`}>{month}</Link>
                  </td>
                  <td>{data.data[month].estimated_income}</td>
                  <td>{data.data[month].income}</td>
                  <td>{data.data[month].estimated_expenses}</td>
                  <td>{data.data[month].expenses}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
};

export default Months;
