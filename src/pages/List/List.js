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

  // listData 안에서 useParams()로 받은 main_category_name과 동일한 값을 mainCategoryList 안에 저장.
  const mainCategoryList = listData.filter(
    el => el.main_category_name === `${main_category_name}`
  );
  // mainCategoryList 안에서 sub_category_id를 기준으로 중복 제거.
  // 그럼 sub_category_id 별로 하나씩만 남겠지 그걸 subCategoryList에 저장
  // 그럼 subCategoryList에는 sub_category 갯수만큼의 객체 배열이 저장되겠지.
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
