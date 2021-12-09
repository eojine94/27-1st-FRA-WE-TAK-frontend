import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SlideShowItem from '../../components/SlideShowItem/SlideShowItem';
import './Main.scss';

function Main() {
  const [nameAndCtgrList, setNameAndCtgrList] = useState([]);
  useEffect(() => {
    fetch('/data/mainData.json')
      .then(res => res.json())
      .then(data => setNameAndCtgrList(data.result));
  }, []);

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
      {nameAndCtgrList[1] && (
        <SlideShowItem
          productName="chicken"
          subCategoryList={nameAndCtgrList[1].sub_category_list}
        />
      )}
      <Link to="/">
        <div className="textWrapper">
          <div className="text">
            100% <br /> ORGANIC&nbsp;
            <i class="fas fa-seedling" />
          </div>
        </div>
      </Link>
      {nameAndCtgrList[0] && (
        <SlideShowItem
          productName="dinosaur"
          subCategoryList={nameAndCtgrList[0].sub_category_list}
        />
      )}
      <Link to="/">
        <div className="textWrapper">
          <div className="text">
            100% <br /> ORGANIC&nbsp;
            <i class="fas fa-seedling" />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Main;
