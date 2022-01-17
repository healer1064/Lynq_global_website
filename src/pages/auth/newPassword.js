import React from 'react';
import AuthHeader from '../../components/auth/authHeader.js';

import './newPassword.css';

function NewPassword() {
  return (
    <div className="new-password">
      <AuthHeader/>
      <div className="new-password-content">
        <label className="title">Enter your new Password</label>
        <p className="description">
          Please make sure your password has at least 8 characters
        </p>
        <div className="new-password-form">
          <label htmlFor="input_password">Password</label>
          <div className="input-field">
            <input id="input_password" placeholder="8+ characters"/>
          </div>
          <label htmlFor="input_comfirm_password">Confirm password</label>
          <div className="input-field">
            <input id="input_comfirm_password"/>
          </div>
        </div>
        <button className="new-password-continue">Set New Password</button>
      </div>
    </div>
  );
}

export default NewPassword;
