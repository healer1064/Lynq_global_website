import { Link } from "react-router-dom";
import './signUpFooter.css';

function SignUpFooter() {
  return (
    <div className="signup-footer">
        <p><span>Already have an account?</span><Link to='/signin' className="signin-btn">Sign in</Link></p>
    </div>
  );
}

export default SignUpFooter;