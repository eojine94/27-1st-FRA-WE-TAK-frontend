import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import './SlideShowItem.scss';

function SlideShowItem({ productName }) {
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    fetch('/data/itemListData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setItemsList(data));
  }, []);

  return (
    <div className="slideShowItem">
      <div className="categoryName">{productName.toUpperCase()}</div>
      <ul className="slideImageWrapper">
        {itemsList.map(item => {
          return (
            <li key={item.id} className="imageList">
              <Item image_src={item.image_src} name={item.name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SlideShowItem;
