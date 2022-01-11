import './header.css';

import {Row, Col, Button} from 'react-materialize'

function Header() {
  return (
    <div className="Header">
        <div className="Container">
            <div className="Header_Wrapper">
                <a className="link">Follow</a>
                <a className="link">Sign in</a>
            </div>
        </div>
    </div>
  );
}

export default Header;