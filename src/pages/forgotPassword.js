import AuthHeader from '../components/auth/authHeader.js';
import ForgotPasswordFooter from '../components/auth/forgotPasswordFooter.js';

import './forgotPassword.css';

function ForgotPassword() {
  return (
    <div className="forgotpassword">
      <AuthHeader/>
      <div className="forgotpassword-content">
        <label className="title">Forgot Password</label>
        <p className="description">
            Enter your email address and we will send you a link to reset your password.
        </p>
        <div className="forgotpassword-form">
          <label htmlFor="input_email">Email</label>
          <div className="input-field">
            <input id="input_email" placeholder="Enter your email"/>
          </div>
        </div>
        <button className="forgotpassword-continue">Reset Password</button>
      </div>
      <ForgotPasswordFooter/>
    </div>
  );
}

export default ForgotPassword;
