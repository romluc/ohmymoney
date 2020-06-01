import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg nav–bar-dark bg-primary">
    <Link className="navbar-brand" to="/">
      <span
        role="img"
        className="mr-2"
        style={{ backgroundColor: '#fff' }}
        aria-label="dollar sign"
      >
        💲
      </span>
      OhMyMoney
    </Link>
  </nav>
);

export default Header;
