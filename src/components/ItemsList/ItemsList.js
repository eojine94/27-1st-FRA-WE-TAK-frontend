import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import makeSymbolPrice from '../../utils';
import './ItemsList.scss';

function ItemsList({ category, price }) {
  const [itemsList, setItemsList] = useState([]);
  const repeatingNumber = 3;

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
        {[...Array(repeatingNumber)].map(() =>
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
