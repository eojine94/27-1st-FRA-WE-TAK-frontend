import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SlideShowItem from '../../components/SlideShowItem/SlideShowItem';
import './Main.scss';

function Main() {
  const [mainData, setMainData] = useState([]);
  useEffect(() => {
    fetch('http://10.58.3.174:8000/products/category')
      .then(res => res.json())
      .then(data => setMainData(data.result));
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
      {mainData[1] && (
        <SlideShowItem
          mainCategoryName={mainData[1].name}
          subCategoryList={mainData[1].sub_category_list}
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
      {mainData[0] && (
        <SlideShowItem
          mainCategoryName={mainData[0].name}
          subCategoryList={mainData[0].sub_category_list}
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
