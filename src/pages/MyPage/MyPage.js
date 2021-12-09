import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import './MyPage.scss';
import MyPageCartItem from '../../components/MyPageCartItem/MyPageCartItem';

function MyPage({ setIsToken }) {
  const [goToOrder, setGoToOrder] = useState(true);
  const navigate = useNavigate();
  const logoutBtn = () => {
    localStorage.removeItem('access_token');
    setIsToken(false);
    navigate('/');
  };

  useEffect(() => {
    if (!localStorage.getItem('access_token')) navigate('/login');

    fetch('http://10.58.3.174:8000/orders/carts', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then(res => res.json())
      .then(data => {});
  }, [navigate]);

  return (
    <div className="mypage">
      <div className="myPageMain">
        <h1 className="helloUserEmail">
          HELLO WELCOME TO FREITAK.
          <button className="logOutButton" onClick={logoutBtn}>
            LogOut
          </button>
        </h1>
        <h3 className="greetUserName">GREAT TO HAVE YOU HERE!</h3>
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
