import React, { useState } from 'react';
import './InputContainer.scss';

function InputContainer({ id, type, name, onChange, text }) {
  const [focus, setFocus] = useState('');

  const handleFocusBorder = e => {
    setFocus(e.target.id);
  };

  return (
    <div className="inputRow">
      <div className="inputContainer">{text}</div>
      <input
        name={name}
        id={id}
        type={type}
        className={`inputLine ${focus === id && 'clickedInputLine'}`}
        onChange={onChange}
        onFocus={e => handleFocusBorder(e)}
        onBlur={() => setFocus('')}
      />
    </div>
  );
}
export default InputContainer;
