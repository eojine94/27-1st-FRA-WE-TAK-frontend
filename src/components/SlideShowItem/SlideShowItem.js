import React, { useState, useEffect, useRef } from 'react';
import Item from '../Item/Item';
import './SlideShowItem.scss';
const DELAY_TIME_MS = 1000;
const REPEATING_NUNBER = 100;

function SlideShowItem({ mainCategoryName, subCategoryList }) {
  const [index, setIndex] = useState(0);
  const slideRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setIndex(prevIndex => ++prevIndex);
    }, DELAY_TIME_MS);
    slideRef.current.style.transform = `translateX(${-index * 100}%)`;
  }, [index, subCategoryList.length]);

  return (
    <div className="slideShowItem">
      <div className="categoryName">{mainCategoryName.toUpperCase()}</div>
      <div className="slideshow">
        <div className="slideshowSlider" ref={slideRef}>
          {[...Array(REPEATING_NUNBER)].map(() =>
            subCategoryList.map(subCtgr => (
              <Item
                key={subCtgr.id}
                url={subCtgr.thumbnail_url}
                krName={subCtgr.kr_name}
                mainCategoryName={mainCategoryName}
                prev="SlideShowItem"
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default SlideShowItem;
