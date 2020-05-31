import React from 'react';

const Header = () => (
  <nav className="navbar navbar-expand-lg nav–bar-dark bg-primary">
    <a className="navbar-brand" href="/">
      <span
        role="img"
        className="mr-2"
        style={{ backgroundColor: '#fff' }}
        aria-label="dollar sign"
      >
        💲
      </span>
      OhMyMoney
    </a>
  </nav>
);

export default Header;
