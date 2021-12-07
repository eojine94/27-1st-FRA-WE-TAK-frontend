import React, { useState, useEffect, useRef } from 'react';
import Item from '../Item/Item';
import './SlideShowItem.scss';
const DELAY_TIME_MS = 50;

function SlideShowItem({ productName }) {
  const [itemsList, setItemsList] = useState([]);
  const [index, setIndex] = useState(0);
  const slideRef = useRef();

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
    }, DELAY_TIME_MS);
    slideRef.current.style.transform = `translateX(${-index * 10}%)`;
  }, [index]);

  return (
    <div className="slideShowItem">
      <div className="categoryName">{productName.toUpperCase()}</div>
      <div className="slideshow">
        <div className="slideshowSlider" ref={slideRef}>
          {itemsList.map(item => (
            <Item key={index.id} image_src={item.image_src} name={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SlideShowItem;
