import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import './MyPage.scss';
import MyPageCartItem from '../../components/MyPageCartItem/MyPageCartItem';

function MyPage() {
  const [goToOrder, setGoToOrder] = useState(true);
  const navigate = useNavigate();
  // console.log(goToOrder);

  const [userProfiles, setUserProfiles] = useState([]);

  const logoutBtn = () => {
    localStorage.removeItem('access_token');
    navigate('/');
    // 그리고 메인페이지로 이동
  };

  // 이거는 인증값을 무조건 받아야 하니까 써야 함
  // 그러니까 데이터를 받아올 수 있는 것?
  useEffect(() => {
    fetch('/data/cartItem.json', {
      method: 'GET',
      headers: {
        // 토큰을 헤더에 실어서 보내고....
        // Authorization:
        //   'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.bHQK7d38oajQKa3Hl8nsYrqDhp9m2fmo_MWjDWMN4Zs',
      },
    })
      .then(res => res.json()) // 백엔드에 요청 -> 그걸 json 형식으로 변경...
      .then(data => {
        setUserProfiles(data.cart_items[0]); // 데이터를 setItems 에 저장
      });
  }, []);

  return (
    <div className="mypage">
      <div className="myPageMain">
        <h1 className="helloUserEmail">
          HELLO {userProfiles.email}
          <button className="logOutButton" onClick={logoutBtn}>
            LogOut
          </button>
        </h1>
        <h3 className="greetUserName">
          GREAT TO HAVE &nbsp;
          <span className="koreanName">{userProfiles.name} &nbsp;</span>
          HERE!
        </h3>
        <p className="myPageText">
          Here you can keep track of your orders, edit your account and get
          access to more services we will be adding over time.
        </p>
      </div>
      <h3 className="myPageCartItemListTitle">Shopping Cart List</h3>
      <ul className="myPageCartItemList">
        <MyPageCartItem setGoToOrder={setGoToOrder} />
      </ul>
      <button
        className="order"
        onClick={e => {
          goToOrder && e.preventDefault();
        }}
      >
        Go to order
      </button>
    </div>
  );
}
export default MyPage;
