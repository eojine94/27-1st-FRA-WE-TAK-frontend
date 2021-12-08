import React, { useState, useEffect } from 'react';
import './MyPage.scss';
import MyPageCartItem from '../../components/MyPageCartItem/MyPageCartItem';

function MyPage() {
  const [goToOrder, setGoToOrder] = useState(true);
  // console.log(goToOrder);

  const [userProfiles, setUserProfiles] = useState([]);

  useEffect(() => {
    fetch('/data/cartItem.json', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setUserProfiles(data.cart_items[0]);
      });
  }, []);

  return (
    <div className="mypage">
      <div className="myPageMain">
        <h1 className="helloUserEmail">
          HELLO {userProfiles.email}
          <button className="logOutButton">LogOut</button>
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
