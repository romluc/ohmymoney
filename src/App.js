import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './elements/Header';
import Home from './pages/Home';
import Transactions from './pages/Transactions';

const App = () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/transactions/:date" component={Transactions} />
    </Router>
  );
};

export default App;
