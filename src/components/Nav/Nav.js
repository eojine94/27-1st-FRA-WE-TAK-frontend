import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Nav.scss';

function Nav() {
  const [cart, setCart] = useState(false);

  function onClickCart() {
    setCart(!cart);
  }

  return (
    <>
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
          <li className="icon" onClick={onClickCart}>
            <i className="fas fa-shopping-cart" />
          </li>
          <li className="icon">
            <i className="fas fa-search" />
          </li>
        </ul>
      </div>
      {cart === true ? <Cart /> : null}
    </>
  );
}

export default Nav;
