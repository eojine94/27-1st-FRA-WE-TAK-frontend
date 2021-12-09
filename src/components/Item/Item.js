import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.scss';

function Item({ id, url, krName, prev, mainCategoryName }) {
  const navigate = useNavigate();

  const goTo = () => {
    prev === 'SlideShowItem'
      ? navigate(`/list/${mainCategoryName}`)
      : navigate(`/detail/${id}`);
  };

  return (
    <div className="item" onClick={goTo}>
      <img className="slide" src={url} alt={krName} />
    </div>
  );
}

export default Item;
