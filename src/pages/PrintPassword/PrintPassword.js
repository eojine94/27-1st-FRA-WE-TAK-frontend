import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import InputContainer from '../InputContainer/InputContainer';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import './ResetPassword.scss';

function ResetPassword() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    userNewPassword: '',
    userConfirmPassword: '',
  });

  const { userNewPassword, userConfirmPassword } = inputValue;

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const passwordReg = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])(?=.*[0-9])[A-Za-z\\d$@$!%*?&]{8,45}'
  );
  const isValidPassword = userNewPassword === userConfirmPassword;

  const getIsActive =
    passwordReg.test(userNewPassword) &&
    passwordReg.test(userConfirmPassword) &&
    isValidPassword;

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
            navigate('/');
          } else {
            alert('잘못된 정보입니다!');
          }
        });
    }
  };

  return (
    <main className="resetPassword">
      <div className="resetPasswordTop">
        <h1 className="resetPasswordTitle">RESET YOUR PASSWORD</h1>
      </div>
      <div className="resetPasswordMiddle">
        <form className="resetPasswordInput">
          {ResetPasswordData.map(list => {
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
          <Link to="/login">
            <span className="loginPage line">Go to the Login Page</span>
          </Link>
        </form>
      </div>
      <div className="resetPasswordBottom">
        <ButtonContainer
          getIsActive={getIsActive}
          onClick={handleButtonValid}
          type="button"
          text="Submit"
        />
      </div>
    </main>
  );
}

export default ResetPassword;
