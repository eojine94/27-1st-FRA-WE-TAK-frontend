import React from 'react';
import { Link } from 'react-router-dom';
import './Detail.scss';

function Detail({ productName, category }) {
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
        <div className="categoryName">CATEGORY_KOR</div>
        <div className="categoryNameWrapper">
          <span className="categoryEnglishName">CATEGORY_ENG</span>
          <span className="price">PRICE</span>
        </div>
        <div className="imageInfoContainer">
          <div className="imageWrapper">
            <img src="/image/egg_character2.jpg" alt="" />
            <img src="/image/egg_character2.jpg" alt="" />
            <img src="/image/egg_character2.jpg" alt="" />
            <img src="/image/egg_character2.jpg" alt="" />
          </div>
          <div className="infoWrapper">
            <div className="categoryKoreanName">CATEGORY_KOR</div>
            <span className="categoryEnglishName">CATEGORY_ENG</span>
            <span>,</span>
            <span className="price">PRICE</span>
            <h4 className="shippingCostDescription">excl shipping cost</h4>
            <div className="itemDescription">DESCRIPTION</div>
            <button className="btnAddToCart">ADD TO CART</button>
          </div>
        </div>
      </article>
      <article className="warningWrapper">
        <div className="warning">주의사항 : 아주 좋아</div>
      </article>
      <article className="imageDescriptionWrapper">
        <img src="/image/egg_character2.jpg" alt="" />
      </article>
    </div>
  );
}

export default Detail;
