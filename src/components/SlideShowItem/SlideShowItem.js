import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import './SlideShowItem.scss';

function SlideShowItem({ productName }) {
  const [itemsList, setItemsList] = useState([]);
  const [index, setIndex] = useState(0);
  const delay = 100;

  useEffect(() => {
    fetch('/data/itemListData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setItemsList(data));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIndex(prevIndex =>
        prevIndex === itemsList.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);
  });

  return (
    <div className="slideShowItem">
      <div className="categoryName">{productName.toUpperCase()}</div>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate(${-index * 50}%, 0)` }}
        >
          {itemsList.map(item => (
            <Item key={index.id} image_src={item.image_src} name={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SlideShowItem;
