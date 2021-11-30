import React from 'react';
import './Cart.scss';

function Cart(props) {
  function mouseLeaveCart() {
    props.setCart(props.Cart);
  }

  return (
    <div className="cart" onMouseLeave={mouseLeaveCart}>
      <h2 className="cartListTitle">Cart List</h2>
      <ul className="cartDetail">
        <li className="itemPhoto">photo</li>
        <li className="itemNum">num</li>
        <li className="itemPrice">price</li>
        <li className="itemDelete">delete</li>
      </ul>
      <div class="itemList">
        <ul className="itemDetail">
          <li className="itemPhoto">
            <img
              className="eggItemImage"
              src="../../image/logo.png"
              alt="eggItem"
            />
          </li>
          <li className="itemNum">1</li>
          <li className="itemPrice">8,000</li>
          <li className="itemDelete">x</li>
        </ul>
        <ul className="itemDetail">
          <li className="itemPhoto">
            <img
              className="eggItemImage"
              src="../../image/logo.png"
              alt="eggItem"
            />
          </li>
          <li className="itemNum">1</li>
          <li className="itemPrice">5,000</li>
          <li className="itemDelete">x</li>
        </ul>
        <ul className="itemDetail">
          <li className="itemPhoto">
            <img
              className="eggItemImage"
              src="../../image/logo.png"
              alt="eggItem"
            />
          </li>
          <li className="itemNum">2</li>
          <li className="itemPrice">1000,000</li>
          <li className="itemDelete">x</li>
        </ul>
        <ul className="itemDetail">
          <li className="itemPhoto">
            <img
              className="eggItemImage"
              src="../../image/logo.png"
              alt="eggItem"
            />
          </li>
          <li className="itemNum">1</li>
          <li className="itemPrice">5,000</li>
          <li className="itemDelete">x</li>
        </ul>
        <ul className="itemDetail">
          <li className="itemPhoto">
            <img
              className="eggItemImage"
              src="../../image/logo.png"
              alt="eggItem"
            />
          </li>
          <li className="itemNum">1</li>
          <li className="itemPrice">5,000</li>
          <li className="itemDelete">x</li>
        </ul>
      </div>
    </div>
  );
}

export default Cart;
