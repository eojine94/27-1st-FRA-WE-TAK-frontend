import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import InputContainer from '../InputContainer/InputContainer';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import './FindId.scss';

function FindId() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    userName: '',
    userPhoneNumber: '',
  });

  const { userName, userPhoneNumber } = inputValue;

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const getIsActive = userName.length >= 1 && userPhoneNumber.length >= 1;

  const handleButtonValid = () => {
    if (!getIsActive) {
      alert('please fill the blanks');
    } else {
      fetch('', {
        method: 'POST',
        body: JSON.stringify({
          name: inputValue.userName,
          contact: inputValue.userPhoneNumber,
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
    <main className="findId">
      <div className="findIdTop">
        <h1 className="findIdTitle">FIND YOUR ID</h1>
      </div>
      <div className="findIdMiddle">
        <form className="findIdInput">
          <InputContainer
            name="userName"
            text="Name *"
            id="name"
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
          <Link to="/FindPassword">
            <span className="forgotPassword line">Forgot your password?</span>
          </Link>
        </form>
      </div>
      <div className="findIdBottom">
        <ButtonContainer
          getIsActive={getIsActive}
          onClick={handleButtonValid}
          type="button"
          text="FIND"
        />
      </div>
    </main>
  );
}

export default FindId;
