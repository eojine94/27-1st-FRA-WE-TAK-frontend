import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemsList from '../../components/ItemsList/ItemsList';
import './ListDinosaur.scss';

function ListDinosaur() {
  const [dinosaurCategoryList, setDinosaurCategoryList] = useState([]);

  useEffect(() => {
    fetch('/data/dinosaurCategoryListData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setDinosaurCategoryList(data));
  });

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
      {dinosaurCategoryList.map(ctgr => {
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
