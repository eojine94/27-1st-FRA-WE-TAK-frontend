import './ButtonContainer.scss';

function ButtonContainer({ getIsActive = true, type, onClick, text }) {
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
