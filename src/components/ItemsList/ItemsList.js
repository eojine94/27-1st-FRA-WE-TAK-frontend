import React from 'react';
import Item from '../Item/Item';
import numToPrice from '../../utils';
import './ItemsList.scss';
const REPEATING_NUNBER = 5;

function ItemsList({ sub_category_name, price, listData }) {
  const subCategoryList = listData.filter(
    el => el.sub_category_name === `${sub_category_name}`
  );

  return (
    <div className="itemsList">
      <h2 className="categoryName">{sub_category_name}</h2>
      <h4 className="categoryPrice">{numToPrice(price)}</h4>
      <div className="imageWrapper">
        {[...Array(REPEATING_NUNBER)].map(() =>
          subCategoryList.map(item => {
            return (
              <Item
                key={item.product_id}
                id={item.product_id}
                url={item.images[0].url}
                krName={item.kr_name}
                prev="ItemsList"
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default ItemsList;
