import React from 'react';
import { Link } from "react-router-dom";
import './callFooter.css';

function CallFooter({minute, minutes, buttonText, setMinute}) {
  return (
    <div className="call-footer">
      <div className="call-btn-group">
        {minutes.map((each, index) => (
          <button key={index} className={minute===index ? "time-btn time-focused" : "time-btn"} onClick={() => setMinute(index)}>
            {each}
          </button>
        ))}
        <Link className="book-now-btn" to={'/call/calendar'}>{buttonText}</Link>
      </div>
    </div>
  );
}

export default CallFooter;