import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemsList from '../../components/ItemsList/ItemsList';
import './ListDinosaur.scss';

function ListDinosaur() {
  const [categoryList, setCategoryList] = useState([]);

  fetch('/data/dinosaurCategoryListData.json', {
    method: 'GET',
  })
    .then(res => res.json())
    .then(data => setCategoryList(data));

  return (
    <div className="listDinosaur">
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
            <Link to="/list-dinosaur">DINOSAUR</Link>
          </li>
        </ul>
      </div>
      {categoryList.map(ctgr => {
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

export default ListDinosaur;
