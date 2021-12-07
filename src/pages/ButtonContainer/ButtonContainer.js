import React, { useState } from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';
import './ButtonContainer.scss';

function ButtonContainer({ getIsActive, type, onClick, text }) {
  return (
    <button
      className={getIsActive ? 'buttonAction' : 'buttonInaction'}
      getIsActive={getIsActive}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
export default ButtonContainer;
