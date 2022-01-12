import { Link } from "react-router-dom";
import './header.css';

function Header() {
  return (
    <div className="Header">
        <div className="Container">
            <div className="Header_Wrapper">
                <Link className="link" to="/">Follow</Link>
                <Link className="link" to="/signin">Sign in</Link>
            </div>
        </div>
    </div>
  );
}

export default Header;