import { Link } from "react-router-dom";
import './forgotPasswordFooter.css';

function ForgotPasswordFooter() {
  return (
    <div className="forgotpassword-footer">
        <p><span>Back to</span><Link className="signin-btn" to="/signin">Sign in</Link></p>
    </div>
  );
}

export default ForgotPasswordFooter;