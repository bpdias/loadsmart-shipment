import React from 'react';
import './Header.scss';

const Header = () => (
  <header>
    <div className="Container">
      <a href="#default" className="logo">
        <img src={require('../../assets/images/loadsmart-l.png')} alt="Loadsmart" />
      </a>
      <div className="header-right">

        <a className="active" href="#about">
          <span className="fas fa-phone fa-rotate-90" />
          (646) 887 6278
        </a>
        <a href="#shipper">Shipper</a>
        <a href="#carrier">Become a Carrier</a>
        <a href="#login">Login</a>
        <a href="#signUp">Sign Up</a>
      </div>
    </div>
  </header>
);

export default Header;
