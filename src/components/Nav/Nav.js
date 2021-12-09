import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Nav.scss';

function Nav() {
  const [cartLayout, setCartLayout] = useState(false);

  const openCartMenu = () => {
    setCartLayout(true);
  };

  const closeCartMenu = () => {
    setCartLayout(false);
  };

  const isToken = localStorage.getItem('access_token');
  const navigate = useNavigate();

  const goToMyPage = () => {
    if (!!isToken) {
      navigate('/my-page');
    } else {
      alert('로그인 해주세요');
      navigate('/login');
    }
  };

  return (
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
        <li className="icon">
          <Link to="/my-page">
            <i className="fas fa-user" />
          </Link>
        </ul>
        <ul className="navIcon">
          <li className="icon">
            <i className="fas fa-user" onClick={goToMyPage} />
          </li>
          <li className="icon" onMouseEnter={openCartMenu}>
            <i className="fas fa-shopping-cart" />
          </li>
          <li className="icon">
            <i className="fas fa-search" />
          </li>
        </ul>
      </div>
      {cartLayout && <Cart closeCartMenu={closeCartMenu} />}
    </div>
  );
}

export default Nav;
