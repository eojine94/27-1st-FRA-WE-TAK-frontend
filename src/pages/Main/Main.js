import React from 'react';
import { Link } from 'react-router-dom';
import SlidingWrapper from '../../components/SlidingWrapper/SlidingWrapper';
import './Main.scss';

function Main() {
  return (
    <div className="main">
      <div className="mainPage">
        <div className="textWrapper">
          <Link to="/">
            <div className="text">
              100% <br /> ORGANIC&nbsp;
              <i class="fas fa-seedling" />
            </div>
          </Link>
        </div>
        <SlidingWrapper />
        <div className="textWrapper">
          <Link to="/">
            <div className="text">
              100% <br /> ORGANIC&nbsp;
              <i class="fas fa-seedling" />
            </div>
          </Link>
        </div>
        <SlidingWrapper />
        <div className="textWrapper">
          <Link to="/">
            <div className="text">
              100% <br /> ORGANIC&nbsp;
              <i class="fas fa-seedling" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
