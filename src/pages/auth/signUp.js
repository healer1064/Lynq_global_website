import React from 'react';
import AuthHeader from '../../components/auth/authHeader.js';
import SignUpFooter from '../../components/auth/signUpFooter.js';
import SignUpWithGoogle from '../../components/auth/signUpWithGoogle.js';
import SignUpWithFacebook from '../../components/auth/signUpWithFacebook.js';

import './signUp.css';

function SignUp() {
  return (
    <div className="signup">
      <AuthHeader/>
      <div className="signup-content">
        <label className="title">Sign Up</label>
        {/* <SignUpWithGoogle />
        <SignUpWithFacebook /> */}
        {/* <div className="divider-div">
          <div className="line-div"></div>
          <p className="line-p">or</p>
          <div className="line-div"></div>
        </div> */}
        <div className="signup-form">
          <label htmlFor="input_name">First Name</label>
          <div className="input-field">
            <input id="first_name" placeholder="Enter your first name"/>
          </div>
          <label htmlFor="input_last_name">Enter you Last Name</label>
          <div className="input-field">
            <input id="input_last_name" placeholder="Enter your last name"/>
          </div>
          <label htmlFor="input_email">Email</label>
          <div className="input-field">
            <input id="input_email" placeholder="Enter your email"/>
          </div>
          <label htmlFor="input_email">Confirm email</label>
          <div className="input-field">
            <input id="confirm_email" placeholder="Confirm your email"/>
          </div>
          <label htmlFor="input_email">Password</label>
          <div className="input-field">
            <input id="input_password" placeholder="Enter your email"/>
          </div>
        </div>
        <div className="signup-agreement">
          By signing up, you agree with Lynq 
          <a href='#'> Terms of Use</a>, <a href='#'>Privacy Policy</a> and <a href='#'>Cookie Policy</a>
        </div>
        <button className="signup-continue">Continue</button>
      </div>
      <SignUpFooter/>
    </div>
  );
}

export default SignUp;
