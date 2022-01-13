import { Link } from "react-router-dom";
import AuthHeader from '../../components/auth/authHeader.js';
import SignInFooter from '../../components/auth/signInFooter.js';
import SignInWithGoogle from '../../components/auth/signInWithGoogle.js';
import SignInWithFacebook from '../../components/auth/signInWithFacebook.js';

import './signIn.css';

function SignIn() {
  return (
    <div className="signin">
      <AuthHeader/>
      <div className="signin-content">
        <label className="title">Sign In</label>
        <div className="signin-form">
          <label htmlFor="input_email">Email</label>
          <div className="input-field">
            <input id="input_email" placeholder="Enter your email"/>
          </div>
          <label htmlFor="input_email">Password</label>
          <div className="input-field">
            <input id="input_password" placeholder="Enter your email"/>
          </div>
            <div className="forgot-field">
                <Link to="/forgotpassword" className="forgot-pass">Forgot password?</Link>
            </div>
        </div>
        <button className="signin-continue">Sign In</button>
        <div className="divider-div">
          <div className="line-div"></div>
          <p className="line-p">or</p>
          <div className="line-div"></div>
        </div>
        <SignInWithGoogle />
        <SignInWithFacebook />
      </div>
      <SignInFooter/>
    </div>
  );
}

export default SignIn;
