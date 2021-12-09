import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import numToPrice from '../../utils';
import './Detail.scss';

function Detail() {
  const { product_id } = useParams();
  const [itemDetail, setItemDetail] = useState([]);

  useEffect(() => {
    fetch('/data/detailData.json')
      .then(res => res.json())
      .then(data => setItemDetail(data.result));
  }, [product_id]);

  const result = itemDetail.filter(
    el => el.product_id === Number(product_id)
  )[0];

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
                className="descriptionImage"
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
            <div className="itemDescription">
              <i class="far fa-smile-wink" />
              {itemDetail.description_txt}
            </div>
            <button className="btnAddToCart">
              <i class="fas fa-shopping-cart" />
              &nbsp;&nbsp;&nbsp;ADD TO CART
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Detail;
