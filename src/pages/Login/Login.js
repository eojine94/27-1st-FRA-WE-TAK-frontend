import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

function Login({ setIsToken }) {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputValue;

  const [isActiveEmailBorder, setIsActiveEmailBorder] = useState(false);
  const [isActivePasswordBorder, setIsActivePasswordBorder] = useState(false);

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const isValidInput = email.length >= 1 && password.length >= 1;

  const handleButtonValid = () => {
    if (!isValidInput) {
      alert('please write a password or email address');
    }
  };

  useEffect(() => {
    setIsToken(!!localStorage.getItem('access_token') ? true : false);
  }); // useEffect 는 랜더링 될 때 마다 실행되기 때문에 좋지 않음
  // 로그인 딱 성공될 때 한번 실행하기
  // fetch .then .then 에서 써주기

  return (
    <main className="login">
      <div className="loginTop">
        <h1 className="loginTitle">LOG IN YOUR USER ACCOUNT</h1>
      </div>
      <div className="loginMiddle">
        <form className="loginInput">
          <div className="emailInput">
            <div className="loginInputMassage">Email address *</div>
            <input
              name="email"
              className={isActiveEmailBorder ? 'clickedInputLine' : 'inputLine'}
              onChange={handleInput}
              onFocus={() => setIsActiveEmailBorder(true)}
              onBlur={() => setIsActiveEmailBorder(false)}
            />
          </div>
          <div className="passwordInput">
            <div className="loginInputMassage">Password *</div>
            <input
              name="password"
              className={
                isActivePasswordBorder ? 'clickedInputLine' : 'inputLine'
              }
              onChange={handleInput}
              onFocus={() => setIsActivePasswordBorder(true)}
              onBlur={() => setIsActivePasswordBorder(false)}
            />
          </div>
          <span className="forgotPassword line">Forgot your password?</span>
        </form>
      </div>
      <div className="loginBottom">
        <button
          className={isValidInput ? 'loginButtonAction' : 'loginButtonInaction'}
          onClick={handleButtonValid}
          type="button"
        >
          LOG IN
        </button>
        <span className="join">
          Not a member yet?
          <Link to="/signup">
            <span className="line">Join us.</span>
          </Link>
        </span>
      </div>
    </main>
  );
}

export default Login;
