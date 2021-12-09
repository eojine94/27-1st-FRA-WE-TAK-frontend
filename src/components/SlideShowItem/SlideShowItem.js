import React, { useState, useEffect, useRef } from 'react';
import Item from '../Item/Item';
import './SlideShowItem.scss';
const DELAY_TIME_MS = 50;

function SlideShowItem({ productName, subCategoryList }) {
  const [index, setIndex] = useState(0);
  const slideRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setIndex(prevIndex =>
        prevIndex === subCategoryList.length - 1 ? 0 : prevIndex + 1
      );
    }, DELAY_TIME_MS);
    slideRef.current.style.transform = `translateX(${-index * 10}%)`;
  }, [index, subCategoryList.length]);

  return (
    <div className="slideShowItem">
      <div className="categoryName">{productName.toUpperCase()}</div>
      <div className="slideshow">
        <div className="slideshowSlider" ref={slideRef}>
          {subCategoryList.map(subCtgr => (
            <Item
              key={subCtgr.id}
              url={subCtgr.thumbnail_url}
              krName={subCtgr.kr_name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SlideShowItem;
