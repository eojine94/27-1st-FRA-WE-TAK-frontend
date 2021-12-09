import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import './MyPage.scss';
import MyPageCartItem from '../../components/MyPageCartItem/MyPageCartItem';

function MyPage() {
  const [goToOrder, setGoToOrder] = useState(true);
  const navigate = useNavigate();

  const [userProfiles, setUserProfiles] = useState([]);

  const logoutBtn = () => {
    localStorage.removeItem('access_token');
    navigate('/');
  };

  useEffect(() => {
    fetch('/data/cartItem.json', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setUserProfiles(data.cart_items[0]);
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
