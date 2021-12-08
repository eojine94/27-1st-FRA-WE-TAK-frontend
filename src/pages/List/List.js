import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ItemsList from '../../components/ItemsList/ItemsList';
import './List.scss';

function List() {
  const { main_category_name } = useParams();
  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetch(`/data/listData.json`)
      .then(res => res.json())
      .then(data => setListData(data.result));
  }, [main_category_name]);

  const mainCategoryList = listData.filter(
    el => el.main_category_name === `${main_category_name}`
  );

  const subCategoryList = mainCategoryList.reduce(function (acc, current) {
    if (
      acc.findIndex(
        ({ sub_category_id }) => sub_category_id === current.sub_category_id
      ) === -1
    ) {
      acc.push(current);
    }
    return acc;
  }, []);

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
            <Link to={`/list/${main_category_name}`}>
              {main_category_name.toUpperCase()}
            </Link>
          </li>
        </ul>
      </div>
      {subCategoryList.map(ctgr => {
        return (
          <ItemsList
            key={ctgr.product_id}
            sub_category_name={ctgr.sub_category_name}
            price={ctgr.price}
            listData={listData}
          />
        );
      })}
    </div>
  );
}

export default List;
