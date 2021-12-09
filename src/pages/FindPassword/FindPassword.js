import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputContainer from '../InputContainer/InputContainer';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import { FindPasswordData } from './FindPasswordData';
import './FindPassword.scss';

function FindPassword() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    userName: '',
    userEmail: '',
    userPhoneNumber: '',
  });

  const { userName, userEmail, userPhoneNumber } = inputValue;

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const emailReg = new RegExp('[a-zA-Z0-9.-]\\.[a-zA-Z]{2,6}$');

  const isValidEmail = emailReg.test(userEmail);
  const isValidInput = userName.length >= 1 && userPhoneNumber.length >= 1;
  const getIsActive = isValidEmail && isValidInput;

  const handleButtonValid = () => {
    if (!getIsActive) {
      alert('please fill the blanks');
    } else {
      fetch('', {
        method: 'POST',
        body: JSON.stringify({
          name: inputValue.userName,
          email: inputValue.userEmail,
          contact: inputValue.userPhoneNumber,
        }),
      })
        .then(response => response.json())
        .then(result => {
          if (result.message) {
            navigate('/reset-password');
          } else {
            alert('잘못된 정보입니다!');
          }
        });
    }
  };

  return (
    <main className="findPassword">
      <div className="findPasswordTop">
        <h1 className="findPasswordTitle">FIND YOUR PASSWORD</h1>
      </div>
      <div className="findPasswordMiddle">
        <form className="findPasswordInput">
          {FindPasswordData.map(list => {
            return (
              <InputContainer
                key={list.id}
                id={list.id}
                name={list.name}
                text={list.text}
                type={list.type}
                onChange={handleInput}
              />
            );
          })}
        </form>
        <div className="resetPassword">Reset Your Password !</div>
      </div>
      <div className="findPasswordBottom">
        <ButtonContainer
          getIsActive={getIsActive}
          onClick={handleButtonValid}
          type="button"
          text="RESET PASSWORD"
        />
      </div>
    </main>
  );
}

export default FindPassword;
