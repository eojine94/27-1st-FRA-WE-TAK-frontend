import React, { useState } from 'react';
import './InputContainer.scss';

function InputContainer({ id, type, name, onChange, text }) {
  const [focus, setFocus] = useState('');

  const handleFocusBorder = id => {
    setFocus(id);
  };

  return (
    <div className="inputRow">
      <div className="inputContainer">{text}</div>
      <input
        name={name}
        type={type}
        className={`inputLine ${focus === id && 'clickedInputLine'}`}
        onChange={onChange}
        onFocus={() => handleFocusBorder(id)}
        onBlur={() => setFocus('')}
      />
    </div>
  );
}
export default InputContainer;
