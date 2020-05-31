import React from 'react';
const AddMonth = () => {
  return (
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
  );
};

export default AddMonth;
