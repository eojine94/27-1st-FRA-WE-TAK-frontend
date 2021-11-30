import React from 'react';
import './Login.scss';

function Login() {
  return (
    <>
      <main className="Login">
        <div className="loginTop">
          <h1 className="loginTitle">LOG IN YOUR USER ACCOUNT</h1>
        </div>
        <div className="loginMiddle">
          <form className="loginInput">
            <div className="emailInput">
              <div className="loginInputMassage">Email address *</div>
              <input className="email"></input>
            </div>
            <div className="passwordInput">
              <div className="loginInputMassage">Password *</div>
              <input className="password"></input>
            </div>
            <span className="forgotPassword line">Forgot your password?</span>
          </form>
        </div>
        <div className="loginBottom">
          <button className="loginButton" type="button">
            LOG IN
          </button>
          <span className="join">
            Not a member yet? <span className="line">Join us.</span>
          </span>
        </div>
      </main>
    </>
  );
}

export default Login;
