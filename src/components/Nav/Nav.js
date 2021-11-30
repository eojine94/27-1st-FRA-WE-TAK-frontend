import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <div className="nav">
      <div className="navTitle">
        <span className="greenColor">Frei</span>tak
        <span className="greenColor">.</span>
      </div>
      <ul className="navMenu">
        <li className="menu">CHICKEN</li>
        <li className="eggLogo">
          <img
            className="eggLogoImg"
            src="../image/egg_character2.jpg"
            alt="eggLogo"
          />
        </li>
        <li className="menu">DINOSAUR</li>
      </ul>
      <ul className="navIcon">
        <li className="icon">
          <i className="fas fa-user" />
        </li>
        <li className="icon">
          <i className="fas fa-shopping-cart" />
        </li>
        <li className="icon">
          <i className="fas fa-search" />
        </li>
      </ul>
    </div>
  );
}

export default Nav;
