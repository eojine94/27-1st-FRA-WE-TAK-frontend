import React from 'react';
import './Cart.scss';
import CartItem from '../CartItem/CartItem.js';

function Cart({ closeCartMenu }) {
  return (
    <div className="cart" onMouseLeave={closeCartMenu}>
      <h2 className="cartListTitle">Cart List</h2>
      <ul className="cartListDetail">
        <li className="itemPhoto">photo</li>
        <li className="itemNum">num</li>
        <li className="itemPrice">price</li>
        <li className="itemDelete">delete</li>
      </ul>
      <div class="cartItems">
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
}

export default Cart;
