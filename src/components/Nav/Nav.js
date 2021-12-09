import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Nav.scss';

function Nav({ isToken }) {
  const [cartLayout, setCartLayout] = useState(false);

  const openCartMenu = () => {
    setCartLayout(true);
  };

  const closeCartMenu = () => {
    setCartLayout(false);
  };

  return (
    <>
      <div className="nav">
        <Link to="/">
          <div className="navTitle">
            <span className="greenColor">Frei</span>tak
            <span className="greenColor">.</span>
          </div>
        </Link>
        <ul className="navMenu">
          <Link to="/list/chicken">
            <li className="menu">CHICKEN</li>
          </Link>
          <Link to="/">
            <li className="eggLogo">
              <img
                className="eggLogoImg"
                src="/image/egg_character2.jpg"
                alt="eggLogo"
              />
            </li>
          </Link>
          <Link to="/list/dinosaur">
            <li className="menu">DINOSAUR</li>
          </Link>
        </ul>
        <ul className="navIcon">
          {isToken === true ? (
            <li className="icon">
              <i className="fas fa-user" />
            </li>
          ) : (
            <>
              <li className="icon">
                <span>
                  <Link to="/login">LOGIN</Link>
                </span>
              </li>
              <li className="icon">
                <span>
                  <Link to="signup">SIGNUP</Link>
                </span>
              </li>
            </>
          )}
          <li className="icon" onMouseEnter={openCartMenu}>
            <i className="fas fa-shopping-cart" />
          </li>
          <li className="icon">
            <i className="fas fa-search" />
          </li>
        </ul>
      </div>
      {cartLayout && <Cart closeCartMenu={closeCartMenu} />}
    </>
  );
}

export default Nav;
