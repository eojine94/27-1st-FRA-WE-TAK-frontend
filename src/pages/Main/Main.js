import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import Slidingproducts from '../../components/SlidingProducts/Slidingproducts';
import './Main.scss';

function Main() {
  return (
    <div className="main">
      <Nav />
      <div className="mainPage">
        <div className="textWrapper">
          <Link to="/">
            <div className="text">
              100% <br /> OFF
            </div>
          </Link>
        </div>
        <div className="slidingWrapper">
          <div className="category">category</div>
          <Slidingproducts />
        </div>
        <div className="textWrapper">
          <Link to="/">
            <div className="text">
              100% <br /> OFF
            </div>
          </Link>
        </div>
        <div className="slidingWrapper">
          <div className="category">category</div>
          <Slidingproducts />
        </div>
        <div className="textWrapper">
          <Link to="/">
            <div className="text">
              100% <br /> OFF
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
