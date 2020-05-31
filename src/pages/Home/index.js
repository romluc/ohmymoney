import React from 'react';

import AddMonth from './AddMonth';
import Months from './Months';

const Home = () => {
  return (
    <div className="container">
      <AddMonth />
      <Months />
    </div>
  );
};

export default Home;
