import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import InputContainer from '../InputContainer/InputContainer';
import API from '../Config/Config';
import { SignUpData } from './SignUpData';
import './SignUp.scss';

function SignUp() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    userName: '',
    userEmail: '',
    userPassword: '',
    userPhoneNumber: '',
    userAddress: '',
  });

  const { userName, userEmail, userPassword, userPhoneNumber, userAddress } =
    inputValue;

  const [checkBoxActive, setCheckBoxActive] = useState(false);

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const isValidInput =
    userName.length >= 1 &&
    userPhoneNumber.length >= 1 &&
    userAddress.length >= 1;

  const isCheckBoxClicked = () => {
    setCheckBoxActive(!checkBoxActive);
  };

  const emailReg = new RegExp('[a-zA-Z0-9.-]\\.[a-zA-Z]{2,6}$');
  const passwordReg = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])(?=.*[0-9])[A-Za-z\\d$@$!%*?&]{8,45}'
  );

  const getIsActive =
    emailReg.test(userEmail) &&
    passwordReg.test(userPassword) &&
    isValidInput &&
    checkBoxActive;

  const handleButtonValid = () => {
    if (!getIsActive) {
      alert('please fill in the blanks');
    } else {
      fetch(API.SIGN_UP, {
        method: 'POST',
        body: JSON.stringify({
          name: inputValue.userName,
          email: inputValue.userEmail,
          password: inputValue.userPassword,
          contact: inputValue.userPhoneNumber,
          address: inputValue.userAddress,
        }),
      })
        .then(response => response.json())
        .then(result => {
          if (result.message) {
            navigate('/login');
          } else {
            alert('잘못된 정보입니다!');
          }
        });
    }
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
          {SignUpData.map(list => {
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
        <div className="agreeCheckbox">
          <div className="accountCheckboxAgree">
            <input
              type="checkbox"
              className="checkbox"
              onClick={isCheckBoxClicked}
            />
            <span className="checkboxContent">
              I agree to the
              <span className="line">terms&conditions and privacy policy</span>*
            </span>
          </div>
          <div className="accountCheckboxAgree">
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
        <ButtonContainer
          getIsActive={getIsActive}
          text="CREATE USER ACCOUNT"
          type="button"
          onClick={handleButtonValid}
        />
        <span className="alreadyConfirm">
          Already a member?
          <Link to="/login">
            <span className="logIn line">Log in.</span>
          </Link>
        </span>
      </div>
    </main>
  );
}

export default SignUp;
