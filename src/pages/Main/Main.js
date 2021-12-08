import React from 'react';
import { Link } from 'react-router-dom';
import SlideShowItem from '../../components/SlideShowItem/SlideShowItem';
import './Main.scss';

function Main() {
  return (
    <div className="main">
      <Link to="/">
        <div className="textWrapper">
          <div className="text">
            100% <br /> ORGANIC&nbsp;
            <i class="fas fa-seedling" />
          </div>
        </div>
      </Link>
      <SlideShowItem productName="chicken" />
      <Link to="/">
        <div className="textWrapper">
          <div className="text">
            100% <br /> ORGANIC&nbsp;
            <i class="fas fa-seedling" />
          </div>
        </div>
      </Link>
      <SlideShowItem productName="dinosaur" />
      <Link to="/">
        <div className="textWrapper">
          <div className="text">
            THANKS TO <br /> 재용님 동생&nbsp;
            <i class="far fa-thumbs-up" />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Main;
