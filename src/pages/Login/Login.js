import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import InputContainer from '../InputContainer/InputContainer';
import API from '../Config/Config';
import { LoginData } from './LoginData';
import './Login.scss';

function Login({ setIsToken }) {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    userEmail: '',
    userPassword: '',
  });

  const { userEmail, userPassword } = inputValue;

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const getIsActive = userEmail.length >= 1 && userPassword.length >= 1;

  const handleButtonValid = () => {
    if (!getIsActive) {
      alert('please write a password or email address');
    } else {
      fetch(API.LOG_IN, {
        method: 'POST',
        body: JSON.stringify({
          email: inputValue.userEmail,
          password: inputValue.userPassword,
        }),
      })
        .then(response => response.json())
        .then(result => {
          if (result.message === 'success') {
            localStorage.setItem('access_token', result.token);
            setIsToken(true);
            navigate('/');
          } else {
            alert('잘못된 정보입니다!');
          }
        });
    }
  };

  return (
    <main className="login">
      <div className="loginTop">
        <h1 className="loginTitle">LOG IN YOUR USER ACCOUNT</h1>
      </div>
      <div className="loginMiddle">
        <form className="loginInput">
          {LoginData.map(list => {
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

          <span className="forgotIDPassword line">
            Forgot your ID or password?
          </span>
        </form>
      </div>
      <div className="loginBottom">
        <ButtonContainer
          getIsActive={getIsActive}
          onClick={handleButtonValid}
          type="button"
          text="LOG IN"
        />
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
