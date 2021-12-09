import React, { useState, useEffect } from 'react';
import './MyPageCartItem.scss';

function MyPageCartItem({ setGoToOrder }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://10.58.3.174:8000/orders/carts', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setItems(data.cart_items);
      });
  }, []);

  const plusItemNum = index => {
    // http://10.58.1.28:8000/orders/carts/${items[index].cart_id} 밑에 써줘야 할 것

    fetch(`http://10.58.3.174:8000/orders/carts/${items[index].cart_id}`, {
      method: 'PATCH',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        count: items[index].count + 1,
      }),
    })
      .then(res => res.json())
      .then(data => {
        data.message === 'SUCCESS'
          ? setItems(
              items.map((item, i) =>
                item.cart_id === items[index].cart_id
                  ? {
                      ...item,
                      count: item.count + 1,
                    }
                  : item
              )
            )
          : alert(data.message);
      });
  };

  const miusItemNum = index => {
    fetch(`http://10.58.3.174:8000/orders/carts/${items[index].cart_id}`, {
      method: 'PATCH',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        count: items[index].count - 1,
      }),
    })
      .then(res => res.json())
      .then(data => {
        data.message === 'SUCCESS'
          ? setItems(
              items.map((item, i) =>
                item.cart_id === items[index].cart_id && item.count !== 1
                  ? {
                      ...item,
                      count: item.count - 1,
                    }
                  : item
              )
            )
          : alert(data.message);
      });
  };

  const deleteItem = index => {
    fetch(`http://10.58.3.174:8000/orders/carts/${items[index].cart_id}`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    }).then(res => {
      res.status === 204
        ? setItems(
            items.filter((item, i) => item.cart_id !== items[index].cart_id)
          )
        : alert('실패');
    });
  };

  return (
    <div>
      {items.length === 0 && (
        <div className="noMyPageCartItem">장바구니에 담긴 상품이 없습니다</div>
      )}
      {items.length === 0 && setGoToOrder(false)}
      {items.map((item, index) => {
        return (
          <li className="myPageCartItem" key={index}>
            <div className="myPageCartItemInfo">
              <img
                className="myPageCartItemPhoto"
                src={item.product_image}
                alt="eggItem"
              />
              <div className="itemInfoList">
                <span className="itemInfoKoreanName">
                  {item.product_kr_name}
                </span>
                <span className="itemInfoEnglishName">
                  {item.product_en_name}
                </span>
              </div>
            </div>
            <div className="myPageItemCount">
              <span className="myPageCartItemNum">{item.count}</span>
              <div className="ItemCountButton">
                <button
                  className="countButton"
                  onClick={() => plusItemNum(index)}
                >
                  +
                </button>
                <button
                  className="countButton"
                  onClick={() => miusItemNum(index)}
                >
                  -
                </button>
              </div>
            </div>
            <div className="myPageItemPrice">
              <span className="myPageCartItemPrice">
                {`￦ ${item.product_price * item.count}`}
              </span>
            </div>
            <div className="myPageItemDelete">
              <button
                className="deleteButton"
                onClick={() => deleteItem(index)}
              >
                X
              </button>
            </div>
          </li>
        );
      })}
    </div>
  );
}

export default MyPageCartItem;
