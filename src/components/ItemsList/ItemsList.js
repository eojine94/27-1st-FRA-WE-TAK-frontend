import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ItemsList.scss';

function ItemsList({ category, price }) {
  const [itemsList, setItemsList] = useState([]);
  const repeatingNumber = 3;

  const makeSymbolPrice = price => {
    const stringPrice = price.toString();
    const lastStringPrice = stringPrice.slice(-3);
    const firstStringPrice = stringPrice.slice(0, -3);
    return `₩ ${firstStringPrice},${lastStringPrice}`;
  };

  useEffect(() => {
    fetch('/data/itemListData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setItemsList(data));
  });

  return (
    <div className="itemsList">
      <h2 className="categoryName">{category}</h2>
      <h4 className="categoryPrice">{makeSymbolPrice(price)}</h4>
      <div className="imageWrapper">
        {[...Array(repeatingNumber)].map(() =>
          itemsList.map(item => {
            return (
              <Link to="/list-chicken" key={item.id}>
                <img className="itemsImage" src={item.image_src} alt="" />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}

export default ItemsList;
