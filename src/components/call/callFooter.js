import { Link } from "react-router-dom";
import './callFooter.css';

function CallFooter() {
  return (
    <div className="call-footer">
      <div className="call-btn-group">
        <button className="time-btn">15min</button>
        <button className="time-btn">15min</button>
        <button className="time-btn">15min</button>
        <button className="book-now-btn">Book Now!</button>
      </div>
    </div>
  );
}

export default CallFooter;