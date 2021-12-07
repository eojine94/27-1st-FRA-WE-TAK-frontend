import React from 'react';
import './MyPage.scss';
import MyPageCartItem from '../../components/MyPageCartItem/MyPageCartItem';

function MyPage() {
  return (
    <div className="mypage">
      <div className="myPageMain">
        <button className="logOutButton">LogOut</button>
        <h1 className="helloUserEmail">HELLO IX219@HANMAIL.NET</h1>
        <h3 className="greetUserName">GREAT TO HAVE JIHYUN HERE!</h3>
        <p className="myPageText">
          Here you can keep track of your orders, edit your account and get
          access to more services we will be adding over time.
        </p>
      </div>
      <h3 className="myPageCartItemListTitle">Shopping Cart List</h3>
      <ul className="myPageCartItemList">
        <MyPageCartItem />
        <MyPageCartItem />
        <MyPageCartItem />
      </ul>

      <button className="order">Go to order</button>
    </div>
  );
}
export default MyPage;
