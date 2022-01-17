import React from 'react';
import { Link } from "react-router-dom";
import './callFooter.css';

function CallFooter({minute, minutes, buttonText, setMinute, option}) {
  return (
    <div className="call-footer">
      <div 
        className={"mini-arrow" + (option !== -1 && minute !== -1 ? "":" invisible")}
        onClick={() => setMinute(-1)}
      >
        <img src="/assets/svg/mini-arrow.svg"/>
      </div>
      <div className="call-btn-group">
        {minutes.map((each, index) => (
          <button
            key={index}
            className={(option !== -1 && minute===index ? "time-btn time-focused" : "time-btn") + (option !== -1 && minute !== -1? " invisible":"")}
            onClick={() => setMinute(index)}
          >
            {each}
          </button>
        ))}
        <Link className={"book-now-btn"+ (option !== -1 && minute !== -1? "":" invisible")} to={'/call/calendar'}>{buttonText}</Link>
      </div>
    </div>
  );
}

export default CallFooter;