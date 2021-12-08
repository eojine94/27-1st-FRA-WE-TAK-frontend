import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ItemsList from '../../components/ItemsList/ItemsList';
import './List.scss';

function List() {
  const { productName } = useParams();
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    fetch(`/data/${productName}CategoryListData.json`, { method: 'GET' })
      .then(res => res.json())
      .then(data => setCategoryList(data));
  }, [productName]);

  return (
    <div className="list">
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
            <Link to={`/list/${productName}`}>{productName.toUpperCase()}</Link>
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

export default List;
