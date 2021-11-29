import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <div className="nav">
      <div className="nav_title">Freitak</div>
      <ul className="nav_menu">
        <li className="shop_menu">샵</li>
        <li className="egg_logo">
          <img
            className="egg_logo_img"
            src="../image/logo.png"
            alt="egg_logo"
          />
        </li>
        <li className="recipe_menu">레시피</li>
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
