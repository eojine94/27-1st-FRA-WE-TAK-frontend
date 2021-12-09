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
      {result && (
        <div>
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
                <Link to={`/list/${result.sub_category_en_name}`}>
                  {result.sub_category_en_name &&
                    result.sub_category_en_name.toUpperCase()}
                </Link>
              </li>
              <li>
                {'>'}
                {'>'}
              </li>
              <li>
                <Link to={`/detail/${result.product_id}`}>
                  {result.en_name && result.en_name.toUpperCase()}
                </Link>
              </li>
            </ul>
          </header>
          <article className="main">
            <div className="categoryKorName">{result.sub_category_kr_name}</div>
            <div className="categoryNameWrapper">
              <span className="categoryEngName">
                {result.sub_category_en_name}
              </span>
              <div className="price">
                {result.price && numToPrice(result.price)}
              </div>
            </div>
            <div className="imageInfoContainer">
              <div className="imageWrapper">
                {[...Array(4)].map(() => (
                  <img
                    className="descriptionImage"
                    key={result.product_id}
                    src={result.images[0].url}
                    alt={result.kr_name}
                  />
                ))}
              </div>
              <div className="infoWrapper">
                <div className="categoryKoreanName">{result.kr_name}</div>
                <span className="categoryEnglishName">{result.en_name}</span>
                <div className="price">
                  {result.price && numToPrice(result.price)}
                </div>
                <h4 className="shippingCostDescription">excl shipping cost</h4>
                <div className="itemDescription">
                  <i class="far fa-smile-wink" />
                  {result.description_txt}
                </div>
                <button className="btnAddToCart">
                  <i class="fas fa-shopping-cart" />
                  &nbsp;&nbsp;&nbsp;ADD TO CART
                </button>
              </div>
            </div>
          </article>
          <article className="warningWrapper">
            <p className="warning">
              Find the secret key. Labyrinth-like adventures A different world
              from reality. Fantastic digital world. Spread your wings in your
              heart. I can’t stop like this With shining hope, Let’s get out of
              the darkness. Even if you fall into a trap somehow, Even if I’m
              trapped in the waves of crisis, I want to achieve it as I thought.
              Wherever we go, wherever we go. Digimon friends. (Let’s go, let’s
              go)
            </p>
          </article>
          <article className="imageDescriptionWrapper">
            <img src={result.description_img} alt={result.description_txt} />
          </article>
        </div>
      )}
    </div>
  );
}

export default Detail;
