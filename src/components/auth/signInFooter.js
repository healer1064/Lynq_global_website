import React from 'react';
import { Link } from "react-router-dom";
import './signInFooter.css';

function SignInFooter() {
  return (
    <div className="signin-footer">
        <p><span>Don't have an account?</span><Link className="signup-btn" to="/signup">Sign up</Link></p>
    </div>
  );
}

export default SignInFooter;