import React from 'react';
import './SignUp.scss';

function SignUp() {
  return (
    <>
      <main className="SignUp">
        <div className="signUpTop">
          <h1 className="signUpTitle">NEW HERE? CREATE YOUR USER ACCOUNT</h1>
          <p className="signUpContent">
            With a FRAWETAK user account you can not only track and orders, you
            can also get access to more services we will be adding over time.
          </p>
        </div>
        <div className="signUpMiddle">
          <form className="signUpInput">
            <div className="nameInput">
              <div className="inputMessage">Name *</div>
              <input className="name"></input>
            </div>
            <div className="emailInput">
              <div className="inputMessage">Email(ID) *</div>
              <input className="email"></input>
            </div>
            <div className="passwordInput">
              <div className="inputMessage">Password *</div>
              <input className="password"></input>
            </div>
            <div className="contactInput">
              <div className="inputMessage">Phone Number *</div>
              <input className="contact"></input>
            </div>
            <div className="addressInput">
              <div className="inputMessage">Address *</div>
              <input className="address"></input>
            </div>
          </form>
          <div className="agreeCheckbox">
            <div className="accountCheckboxAgreePolicy">
              <input type="checkbox" className="checkbox"></input>
              <span className="checkboxContent">
                I agree to the
                <span className="line">
                  terms&conditions and privacy policy
                </span>
                *
              </span>
            </div>
            <div className="accountCheckboxAgreeNewsLetter">
              <input type="checkbox" className="checkbox"></input>
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
          <button className="signUpButton" type="button">
            CREATE USER ACCOUNT
          </button>
          <span className="alreadyConfirm">
            Already a member?<span className="logIn line">Log in.</span>
          </span>
        </div>
      </main>
    </>
  );
}

export default SignUp;
