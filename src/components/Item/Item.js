import React from 'react';
import { Link } from 'react-router-dom';
import './Item.scss';

function Item({ category, image_src, name }) {
  return (
    <div className="item">
      <Link to={`/list-${category}`}>
        <img className="slide" src={image_src} alt={name} />
      </Link>
    </div>
  );
}

export default Item;
