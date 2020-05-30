import React from 'react';
import { Nav, NavHeader, Brand } from './styles.js';

const Header = () => (
  <Nav>
    <NavHeader>
      <Brand fontSize={32}>Oh my money!</Brand>
    </NavHeader>
  </Nav>
);

export default Header;
