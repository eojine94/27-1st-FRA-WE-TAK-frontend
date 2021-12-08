import React, { useState, useEffect } from 'react';
import './MyPageCartItem.scss';

function MyPageCartItem({ setGoToOrder }) {
  const [items, setItems] = useState([]);

  // 장바구니에 담기 위해서는 먼저 로그인을 해야 한다. 즉 access token 이 필요하다.
  // 로그인을 하면서 로컬 스토리지에 저장된 access token 을 다시 fetch head 에 담아
  // post 해야 한다....

  // useEffect(() => {
  //   fetch('', {
  //     method: 'GET',
  //     headers: {
  //       Authorization:
  //         'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.pvaoHXfzEKZDOCUnkG9PGaEU995dykNUyOwbwbV2VtM',
  //       // 위에는 임시값임... Authorization: localStorage.getItem('token'),
  //     },
  //   });
  // });

  useEffect(() => {
    fetch('http://10.58.1.28:8000/orders/carts', {
      method: 'GET',
      headers: {
        // 토큰을 헤더에 실어서 보내고....
        // Authorization:
        //   'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.bHQK7d38oajQKa3Hl8nsYrqDhp9m2fmo_MWjDWMN4Zs',
      },
    })
      .then(res => res.json()) // 백엔드에 요청 -> 그걸 json 형식으로 변경...
      .then(data => {
        setItems(data.cart_items); // 데이터를 setItems 에 저장
      });
  }, []);

  // console.log(items);

  // get -> 장바구니 아이템 맵 돌려서 찍어주고 , patch 나 post 로 백엔드에서 원하는
  // 정보를 body 에 실어서 보낸다.
  // 삭제 = post 나 delete

  // 수량 조절 -> cart_id, count 데이터를 백엔드로 보내기

  // const deleteData = () => {
  //   fetch('', {
  //     method: 'DELETE',
  //     headers: {
  //       Authorization: localStorage.getItem('token'),
  //     },
  //     body: JSON.stringify({}),
  //   });
  // };

  const plusItemNum = index => {
    // id 를 받아서 아이템 안에 있는 그 id 가진 아이를 찾아서 count 를 변경시켜준다.
    // map 을 써서 id 가 다른 아이는 그냥 그 계란을 쓰고, id 가 다르면 그 계란 정보 중 count 만 변경하고 나머지는 같게 만든 후 다시 setitem에 넣는다
    //
    // setItems(
    //   items.map(item =>
    //     item.cart_id !== id
    //       ? item
    //       : {
    //           ...item,
    //           count: item.count + 1,
    //         }
    //   )
    // );

    fetch(`http://10.58.1.28:8000/orders/carts/${items[index].cart_id}`, {
      method: 'PATCH', // patch 나 post 메서드를 이용
      // headers: {
      //   // 헤더에 토큰을 실어서 날리고...
      //   // Authorization:
      //   //   'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.bHQK7d38oajQKa3Hl8nsYrqDhp9m2fmo_MWjDWMN4Zs',
      // },
      body: JSON.stringify({
        count: items[index].count + 1,
      }),
    })
      .then(res => res.json())
      .then(data => {
        data.message === 'SUCCESS'
          ? setItems(
              items.map((item, i) =>
                item.cart_id === items[index].cart_id // item.cart_id 가 누른 카드아이디가 동일하면 item 의 수량을 증가 시킨다.
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
    fetch(`http://10.58.1.28:8000/orders/carts/${items[index].cart_id}`, {
      method: 'PATCH',
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
                  ? // item.cart_id 가 누른 카트 아이디가 동일하고...
                    // item.count 가 1이 아니어야 한다.
                    {
                      ...item,
                      count: item.count - 1,
                    }
                  : item
              )
            )
          : alert(data.message);
      });
  };

  // setItems(
  //   items.map(item =>
  //     item.cart_id === id && item.count !== 1
  //       ? { ...item, count: item.count - 1 }
  //       : item
  //   )
  // );

  // itemNum === 1 && nonclick;

  const deleteItem = index => {
    fetch(`http://10.58.1.28:8000/orders/carts/${items[index].cart_id}`, {
      method: 'DELETE',
      // headers: {
      //   Authorization:
      //     'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.bHQK7d38oajQKa3Hl8nsYrqDhp9m2fmo_MWjDWMN4Zs',
      // },
    })
      .then(res => res.json())
      .then(data => {
        data.message === 'DELETED'
          ? setItems(items.filter(item => item.cart_id !== item[index].cart_id))
          : alert(data.message);
      });
  };

  // const deleteItem = id => {
  //   return setItems(items.filter(item => item.cart_id !== id));
  // };

  /* <밑에 코드를 제대로 해석 안한 내 잘못>
1. items 을 map 으로 돌리고 있다. 각 객체들은 item 이다.
2. 각 리스트의 키 값은 item.cart_id 이다. 그러니까 각각 2, 3, 5 이다.
3. 플러스 버튼을 눌렀을 때 인자로 item.cart_id 가 들어간다.
4. 위의 플러스 함수 보기


- 통신에 실패한 이유 -
1. 일단 message 를 MESSAGE 를 씀
2. 앤드 포인트를 맞추지 못함(소통 부족).... 
3. 새로고침하고 버튼을 눌러서 네트워크 탭을 눌러서 클릭 
4. header, preview, payroad 확인 (각 차이 알아두기)
5. payroad 확인했을 때 내가 예상하는 값이 들어가는지 확인?
 */

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
