import React, { useState, useEffect } from 'react';
import './CartItem.scss';

function CartItem() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://10.58.3.174:8000/orders/carts', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then(response => response.json())
      .then(data => {
        setItems(data.cart_items);
      });
  }, []);

  return (
    <>
      {items.map(item => {
        return (
          <ul className="cartItem" key={item.cart_id}>
            <li className="itemPhoto">
              <img
                className="eggItemImage"
                src={item.product_image}
                alt="eggItem"
              />
            </li>
            <li className="itemName">{item.product_kr_name}</li>
            <li className="itemCount">{item.count}</li>
            <li className="itemPrice">{item.product_price * 1}</li>
          </ul>
        );
      })}
    </>
  );
}

export default CartItem;
