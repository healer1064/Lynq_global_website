import { Link } from "react-router-dom";
import './exclusiveFooter.css';

function ExclusiveFooter() {
  return (
    <div className="exclusive-footer">
        <Link className="footer-btn" to="/signup">Continue</Link>
    </div>
  );
}

export default ExclusiveFooter;