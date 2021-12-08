import React, { useState, useEffect } from 'react';
import './MyPageCartItem.scss';

function MyPageCartItem({ setGoToOrder }) {
  const [items, setItems] = useState([]);

  // 장바구니에 담기 위해서는 먼저 로그인을 해야 한다. 즉 access token 이 필요하다.
  // 로그인을 하면서 로컬 스토리지에 저장된 access token 을 다시 fetch head 에 담아
  // post 해야 한다....

  // useEffect(() => {
  //   fetch('', {
  //     method: 'POST',
  //     headers: {
  //       Authorization:
  //         'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.pvaoHXfzEKZDOCUnkG9PGaEU995dykNUyOwbwbV2VtM',
  //       // 위에는 임시값임... Authorization: localStorage.getItem('token'),
  //     },
  //   });
  // });

  useEffect(() => {
    fetch('/data/cartItem.json', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setItems(data.cart_items);
      });
  }, []);
  // console.log(items[0].cart_id);

  // const deleteData = ({ productId, size }) => {
  //   fetch('', {
  //     method: 'DELETE',
  //     headers: {
  //       Authorization: localStorage.getItem('token'),
  //     },
  //     body: JSON.stringify({}),
  //   });
  // };

  const plusItemNum = id => {
    // id 를 받아서 아이템 안에 있는 그 id 가진 아이를 찾아서 count 를 변경시켜준다.
    // map 을 써서 id 가 다른 아이는 그냥 그 계란을 쓰고, id 가 다르면 그 계란 정보 중 count 만 변경하고 나머지는 같게 만든 후 다시 setitem에 넣는다
    setItems(
      items.map(item =>
        item.cart_id !== id
          ? item
          : {
              ...item,
              count: item.count + 1,
            }
      )
    );
  };

  const miusItemNum = id => {
    setItems(
      items.map(item =>
        item.cart_id === id && item.count !== 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );

    // itemNum === 1 && nonclick;
  };

  const deleteItem = id => {
    return setItems(items.filter(item => item.cart_id !== id));
  };

  return (
    <div>
      {items.length === 0 && (
        <div className="noMyPageCartItem">장바구니에 담긴 상품이 없습니다</div>
      )}
      {items.length === 0 && setGoToOrder(false)}
      {items.map(item => {
        return (
          <li className="myPageCartItem" key={item.cart_id}>
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
                  className="plusButton"
                  onClick={() => plusItemNum(item.cart_id)}
                >
                  +
                </button>
                <button
                  className="miusButton"
                  onClick={() => miusItemNum(item.cart_id)}
                >
                  -
                </button>
              </div>
            </div>
            <div className="myPageItemPrice">
              <span className="myPageCartItemPrice">
                {item.product_price * item.count}
              </span>
            </div>
            <div className="myPageItemDelete">
              <button
                className="deleteButton"
                onClick={() => deleteItem(item.cart_id)}
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
