import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import makeSymbolPrice from '../../utils';
import './Detail.scss';

function Detail({ productName, category }) {
  const [itemDetail, setItemDetail] = useState([]);

  useEffect(() => {
    fetch('/data/detailData.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => setItemDetail(data.result[0]));
  }, []);

  return (
    <div className="detail">
      <header className="classificationWrapper">
        <ul className="classification">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            {'>'}
            {'>'}
          </li>
          <li>
            <Link to={`/list-${productName}`}>{productName.toUpperCase()}</Link>
          </li>
          <li>
            {'>'}
            {'>'}
          </li>
          <li>
            <Link to={`/detail-${category}`}>{category.toUpperCase()}</Link>
          </li>
        </ul>
      </header>
      <article className="main">
        <div className="categoryKorName">{itemDetail.sub_category_kr_name}</div>
        <div className="categoryNameWrapper">
          <span className="categoryEngName">
            {itemDetail.sub_category_en_name}
          </span>
          <div className="price">
            {itemDetail.price && makeSymbolPrice(itemDetail.price)}
          </div>
        </div>
        <div className="imageInfoContainer">
          <div className="imageWrapper">
            {[...Array(4)].map(() => (
              <img
                key={itemDetail.product_id}
                src={itemDetail.description_img}
                alt={itemDetail.kr_name}
              />
            ))}
          </div>
          <div className="infoWrapper">
            <div className="categoryKoreanName">{itemDetail.kr_name}</div>
            <span className="categoryEnglishName">{itemDetail.en_name}</span>
            <span>,</span>
            <span className="price">
              {itemDetail.price && makeSymbolPrice(itemDetail.price)}
            </span>
            <h4 className="shippingCostDescription">excl shipping cost</h4>
            {/* <h4 className="colorDescription">
              <i class="fas fa-palette"></i>Color:
              {itemDetail.sub_category_color}
            </h4> */}
            <div className="itemDescription">
              <i class="far fa-smile-wink"></i>
              {itemDetail.description_txt}
            </div>
            <button className="btnAddToCart">
              <i class="fas fa-shopping-cart"></i>&nbsp;&nbsp;&nbsp;ADD TO CART
            </button>
          </div>
        </div>
      </article>
      <article className="warningWrapper">
        <p className="warning">
          Find the secret key. Labyrinth-like adventures A different world from
          reality. Fantastic digital world. Spread your wings in your heart. I
          can’t stop like this With shining hope, Let’s get out of the darkness.
          Even if you fall into a trap somehow, Even if I’m trapped in the waves
          of crisis, I want to achieve it as I thought. Wherever we go, wherever
          we go. Digimon friends. (Let’s go, let’s go)
        </p>
      </article>
      <article className="imageDescriptionWrapper">
        <img
          src={itemDetail.description_img}
          alt={itemDetail.description_txt}
        />
      </article>
    </div>
  );
}

export default Detail;
