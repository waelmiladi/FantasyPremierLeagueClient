import React from 'react';
import { Link } from 'react-router';

const Navbar = () => (
  <nav>
    <div className="nav-wrapper blue lighten-1">
      <Link to="/" className="brand-logo">EFL</Link>
    </div>
  </nav>
);

export default Navbar;
