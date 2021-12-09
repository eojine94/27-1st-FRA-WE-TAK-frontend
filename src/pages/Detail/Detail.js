import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import numToPrice from '../../utils';
import './Detail.scss';

function Detail() {
  const { product_id } = useParams();
  const [itemDetail, setItemDetail] = useState({});

  useEffect(() => {
    fetch(`http://10.58.3.174:8000/products/${product_id}`)
      .then(res => res.json())
      .then(data => {
        setItemDetail(data.result);
      });
  }, [product_id]);

  const addToCart = () => {
    fetch('http://10.58.3.174:8000/orders/carts', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        product_id,
        count: 1,
      }),
    })
      .then(res => res.json())
      .then(data => {
        data.message === 'SUCCESS' &&
          alert('장바구니에 정상적으로 담겼습니다.');
      });
  };

  console.log(itemDetail);

  return (
    <div className="detail">
      {itemDetail.product_id && (
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
                <Link to={`/list/${itemDetail.sub_category_en_name}`}>
                  {itemDetail.sub_category_en_name &&
                    itemDetail.sub_category_en_name.toUpperCase()}
                </Link>
              </li>
              <li>
                {'>'}
                {'>'}
              </li>
              <li>
                <Link to={`/detail/${itemDetail.product_id}`}>
                  {itemDetail.en_name && itemDetail.en_name.toUpperCase()}
                </Link>
              </li>
            </ul>
          </header>
          <article className="main">
            <div className="categoryKorName">
              {itemDetail.sub_category_kr_name}
            </div>
            <div className="categoryNameWrapper">
              <span className="categoryEngName">
                {itemDetail.sub_category_en_name}
              </span>
              <div className="price">
                {itemDetail.price && numToPrice(itemDetail.price)}
              </div>
            </div>
            <div className="imageInfoContainer">
              <div className="imageWrapper">
                {[...Array(4)].map(() => (
                  <img
                    className="descriptionImage"
                    key={itemDetail.product_id}
                    src={itemDetail.images[0].url}
                    alt={itemDetail.kr_name}
                  />
                ))}
              </div>
              <div className="infoWrapper">
                <div className="categoryKoreanName">{itemDetail.kr_name}</div>
                <span className="categoryEnglishName">
                  {itemDetail.en_name}
                </span>
                <div className="price">
                  {itemDetail.price && numToPrice(itemDetail.price)}
                </div>
                <h4 className="shippingCostDescription">excl shipping cost</h4>
                <div className="itemDescription">
                  <i class="far fa-smile-wink" />
                  {itemDetail.title}
                </div>
                <div className="itemRatting">{`${itemDetail.rating} / 10`}</div>
                <button className="btnAddToCart" onClick={addToCart}>
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
            <img
              src={itemDetail.description_img}
              alt={itemDetail.description_txt}
            />
          </article>
        </div>
      )}
    </div>
  );
}

export default Detail;
