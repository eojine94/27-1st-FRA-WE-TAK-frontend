import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.scss';

function Item({ id, url, krName }) {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="item" onClick={goToDetail}>
      <img className="slide" src={url} alt={krName} />
    </div>
  );
}

export default Item;
