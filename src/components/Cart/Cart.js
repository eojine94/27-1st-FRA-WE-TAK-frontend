import React from 'react';
import CartItem from '../CartItem/CartItem.js';
import './Cart.scss';

function Cart({ closeCartMenu }) {
  return (
    <div className="cart" onMouseLeave={closeCartMenu}>
      <h2 className="cartListTitle">Cart List</h2>
      <ul className="cartListDetail">
        <li className="itemPhoto">photo</li>
        <li className="itemName">name</li>
        <li className="itemCount">count</li>
        <li className="itemPrice">price</li>
      </ul>
      <div class="cartItems">
        <CartItem />
      </div>
    </div>
  );
}

export default Cart;
