import React from 'react';
import './CartItem.scss';

function CartItem() {
  return (
    <ul className="cartItem">
      <li className="itemPhoto">
        <img className="eggItemImage" src="/image/logo.png" alt="eggItem" />
      </li>
      <li className="itemNum">2</li>
      <li className="itemPrice">1000,000</li>
      <li className="itemDelete">x</li>
    </ul>
  );
}

export default CartItem;
