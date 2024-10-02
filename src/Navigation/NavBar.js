import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/seller-dashboard">Seller Dashboard</Link></li>
        <li><Link to="/buyer-dashboard">Buyer Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
