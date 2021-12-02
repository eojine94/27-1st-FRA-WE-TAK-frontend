import React, { useState } from 'react';
import './SignUp.scss';

function SignUp() {
  const [inputValue, setInputValue] = useState({
    userName: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
  });

  const { userName, email, password, phoneNumber, address } = inputValue;

  const [activeBorder, setActiveBorder] = useState({
    userNameBorder: false,
    emailBorder: false,
    passwordBorder: false,
    phoneNumberBorder: false,
    addressBorder: false,
  });

  const {
    userNameBorder,
    emailBorder,
    passwordBorder,
    phoneNumberBorder,
    addressBorder,
  } = activeBorder;

  const [checkBoxActive, setCheckboxActive] = useState(false);

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleFocusBorder = border => {
    setActiveBorder({
      ...activeBorder,
      [border]: true,
    });
  };
  const handleBlurBorder = border => {
    setActiveBorder({
      ...activeBorder,
      [border]: false,
    });
  };

  const isValidInput = () => {
    return (
      userName.length >= 1 && phoneNumber.length >= 1 && address.length >= 1
    );
  };

  const isValidEmail = () => {
    return email.includes('@') && email.includes('.');
  };

  const specialLetter = password.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

  const isValidPassword = () => {
    return password.length >= 8 && specialLetter >= 1;
  };
  const isClicked = () => {
    setCheckboxActive(!checkBoxActive);
  };
  const getIsActive = () => {
    return (
      isValidEmail() &&
      isValidPassword() &&
      isValidInput() &&
      checkBoxActive === true
    );
  };
  const handleButtonAction = () => {
    return getIsActive() ? 'signUpButtonAction' : 'signUpButtonInaction';
  };
  return (
    <main className="signUp">
      <div className="signUpTop">
        <h1 className="signUpTitle">NEW HERE? CREATE YOUR USER ACCOUNT</h1>
        <p className="signUpContent">
          With a FRAWETAK user account you can not only track and orders, you
          can also get access to more services we will be adding over time.
        </p>
      </div>
      <div className="signUpMiddle">
        <form className="signUpInput">
          <div className="nameInput">
            <div className="inputMessage">Name *</div>
            <input
              className={userNameBorder ? 'clickedInputLine' : 'inputLine'}
              name="userName"
              onChange={handleInput}
              onFocus={() => handleFocusBorder('userNameBorder')}
              onBlur={() => handleBlurBorder('userNameBorder')}
            />
          </div>
          <div className="emailInput">
            <div className="inputMessage">Email(ID) *</div>
            <input
              name="email"
              className={emailBorder ? 'clickedInputLine' : 'inputLine'}
              onChange={handleInput}
              onFocus={() => handleFocusBorder('emailBorder')}
              onBlur={() => handleBlurBorder('emailBorder')}
            />
          </div>
          <div className="passwordInput">
            <div className="inputMessage">Password *</div>
            <input
              type="password"
              name="password"
              className={passwordBorder ? 'clickedInputLine' : 'inputLine'}
              onChange={handleInput}
              onFocus={() => handleFocusBorder('passwordBorder')}
              onBlur={() => handleBlurBorder('passwordBorder')}
            />
          </div>
          <div className="phoneNumberInput">
            <div className="inputMessage">Phone Number *</div>
            <input
              name="phoneNumber"
              className={phoneNumberBorder ? 'clickedInputLine' : 'inputLine'}
              onChange={handleInput}
              onFocus={() => handleFocusBorder('phoneNumberBorder')}
              onBlur={() => handleBlurBorder('phoneNumberBorder')}
            />
          </div>
          <div className="addressInput">
            <div className="inputMessage">Address *</div>
            <input
              name="address"
              className={addressBorder ? 'clickedInputLine' : 'inputLine'}
              onChange={handleInput}
              onFocus={() => handleFocusBorder('addressBorder')}
              onBlur={() => handleBlurBorder('addressBorder')}
            />
          </div>
        </form>
        <div className="agreeCheckbox">
          <div className="accountCheckboxAgreePolicy">
            <input type="checkbox" className="checkbox" onClick={isClicked} />
            <span className="checkboxContent">
              I agree to the
              <span className="line">terms&conditions and privacy policy</span>*
            </span>
          </div>
          <div className="accountCheckboxAgreeNewsLetter">
            <input type="checkbox" className="checkbox" />
            <span className="checkboxContent">
              I would like to receive you newsletter
            </span>
          </div>
          <span className="checkboxExplain">
            You will be able to set your password after you've confirmed your
            email address
          </span>
        </div>
      </div>
      <div className="signUpBottom">
        <button
          className={handleButtonAction()}
          type="button"
          disabled={!getIsActive()}
        >
          CREATE USER ACCOUNT
        </button>
        <span className="alreadyConfirm">
          Already a member?<span className="logIn line">Log in.</span>
        </span>
      </div>
    </main>
  );
}

export default SignUp;
