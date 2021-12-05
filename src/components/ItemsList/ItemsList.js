import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import makeSymbolPrice from '../../utils';
import './ItemsList.scss';
const REPEATING_NUNBER = 3;

function ItemsList({ category, price }) {
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    fetch('/data/itemListData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setItemsList(data));
  }, []);

  return (
    <div className="itemsList">
      <h2 className="categoryName">{category}</h2>
      <h4 className="categoryPrice">{makeSymbolPrice(price)}</h4>
      <div className="imageWrapper">
        {[...Array(REPEATING_NUNBER)].map(() =>
          itemsList.map(item => {
            return (
              <Item
                key={item.id}
                category={category}
                image_src={item.image_src}
                name={item.name}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default ItemsList;
