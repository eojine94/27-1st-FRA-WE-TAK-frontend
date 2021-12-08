import React, { useState, useEffect, useRef } from 'react';
import Item from '../Item/Item';
import './SlideShowItem.scss';
const DELAY_TIME_MS = 50;

function SlideShowItem({ productName, sub_category_list }) {
  const [index, setIndex] = useState(0);
  const slideRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setIndex(prevIndex =>
        prevIndex === sub_category_list.length - 1 ? 0 : prevIndex + 1
      );
    }, DELAY_TIME_MS);
    slideRef.current.style.transform = `translateX(${-index * 10}%)`;
  }, [index, sub_category_list.length]);

  return (
    <div className="slideShowItem">
      <div className="categoryName">{productName.toUpperCase()}</div>
      <div className="slideshow">
        <div className="slideshowSlider" ref={slideRef}>
          {sub_category_list.map(sctgr => (
            <Item
              key={sctgr.id}
              url={sctgr.thumbnail_url}
              krName={sctgr.kr_name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SlideShowItem;
