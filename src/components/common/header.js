import { Link } from "react-router-dom";
import './header.css';

function Header({isfollow, setShowFollow, setShowFollowing}) {
  function handleFollowing() {
    setShowFollowing(true);
  }
  function handleFollow() {
    setShowFollow(true);
  }
  return (
    <div className="Header">
        <div className="custom-container">
            <div className="Header_Wrapper">
                {isfollow ? (
                  <a className="link" href='#' onClick={handleFollowing}>Following</a>
                ) : (
                  <a className="link" href='#' onClick={handleFollow}>Follow</a>
                )}
                <Link className="link" to="/signin">Sign in</Link>
            </div>
        </div>
    </div>
  );
}

export default Header;