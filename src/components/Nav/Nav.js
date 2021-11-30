import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <div className="nav">
      <div className="nav_title">
        <span className="green_color">Frei</span>tak
        <span className="green_color">.</span>
      </div>
      <ul className="nav_menu">
        <li className="chicken_menu">CHICKEN</li>
        <li className="egg_logo">
          <img
            className="egg_logo_img"
            src="../image/egg_character2.jpg"
            alt="egg_logo"
          />
        </li>
        <li className="dinosaur_menu">DINOSAUR</li>
      </ul>
      <ul className="nav_icon">
        <li className="user_icon">
          <i className="fas fa-user" />
        </li>
        <li className="shopping_cart_icon">
          <i className="fas fa-shopping-cart" />
        </li>
        <li className="search_icon">
          <i className="fas fa-search" />
        </li>
      </ul>
    </div>
  );
}

export default Nav;
