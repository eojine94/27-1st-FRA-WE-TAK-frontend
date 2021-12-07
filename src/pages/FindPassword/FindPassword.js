import React, { useState } from 'react';
import InputContainer from '../InputContainer/InputContainer';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import './FindPassword.scss';

function FindPassword() {
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
    if (!isValidEmail || !isValidInput) {
      alert('please fill the blanks');
    }
  };

  return (
    <main className="findPassword">
      <div className="findPasswordTop">
        <h1 className="findPasswordTitle">FIND YOUR PASSWORD</h1>
      </div>
      <div className="findPasswordMiddle">
        <form className="findPasswordInput">
          <InputContainer
            name="userName"
            text="Name *"
            id="name"
            type="text"
            onChange={handleInput}
          />
          <InputContainer
            name="userEmail"
            text="Email(ID) *"
            id="email"
            type="text"
            onChange={handleInput}
          />
          <InputContainer
            name="userPhoneNumber"
            text="PhoneNumber *"
            id="phoneNumber"
            type="text"
            onChange={handleInput}
          />
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
