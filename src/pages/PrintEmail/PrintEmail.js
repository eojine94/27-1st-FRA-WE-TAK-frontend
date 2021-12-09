import { useNavigate } from 'react-router-dom';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import './PrintEmail.scss';

function PrintEmail() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <main className="printContainer">
      <div className="printEmail">
        <div className="inputEmail">naeun123@gmail.com</div>
      </div>
      <div className="buttonContainer">
        <ButtonContainer onClick={goToLogin} type="button" text="GO TO LOGIN" />
      </div>
    </main>
  );
}

export default PrintEmail;