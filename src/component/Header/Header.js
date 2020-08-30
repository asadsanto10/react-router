import React from 'react';
import logo from '../../images/logo.png';
import "./Header.scss"
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="/"><img src={logo} alt=""/> </a>
      </div>
      {/* nav bar */}
      <nav>
        <a href="/shop">Shop</a>
        <a href="/review">Review</a>
        <a href="/inventory">Manage Enventory</a>
      </nav>
    </div>
  );
};

export default Header;