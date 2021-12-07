import React from 'react';
import './MyPageCartItem.scss';

function MyPageCartItem() {
  return (
    <li className="myPageCartItem">
      <div className="myPageCartItemInfo">
        <img
          className="myPageCartItemPhoto"
          src="../../image/logo.png"
          alt="eggItem"
        />
        <div className="itemInfoList">
          <span className="itemInfoKoreanName">한국이름</span>
          <span className="itemInfoEnglishName">EnglishName</span>
          <span className="itemInfoSubCategory">유정란</span>
        </div>
      </div>
      <div className="myPageItemCount">
        <span className="myPageCartItemNum">2</span>
        <div className="ItemCountButton">
          <button className="plusButton">+</button>
          <button className="miusButton">-</button>
        </div>
      </div>
      <div className="myPageItemPrice">
        <span className="myPageCartItemPrice">100,000</span>
      </div>
      <div className="myPageItemDelete">
        <button className="deleteButton">X</button>
      </div>
    </li>
  );
}

export default MyPageCartItem;
