import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemsList from '../../components/ItemsList/ItemsList';
import './ListChicken.scss';

function ListChicken() {
  const [chickenCategoryList, setChickenCategoryList] = useState([]);

  fetch('/data/chickenCategoryListData.json', { method: 'GET' })
    .then(res => res.json())
    .then(data => setChickenCategoryList(data));

  return (
    <div className="listChicken">
      <div className="classificationWrapper">
        <ul className="classification">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            {'>'}
            {'>'}
          </li>
          <li>
            <Link to="/list-chicken">CHICKEN</Link>
          </li>
        </ul>
      </div>
      {chickenCategoryList.map(ctgr => {
        return (
          <ItemsList
            key={ctgr.id}
            category={ctgr.category}
            price={ctgr.price}
          />
        );
      })}
    </div>
  );
}

export default ListChicken;
