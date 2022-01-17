import React from 'react';
import { Link } from "react-router-dom";
import './calendarFooter.css';

function CalendarFooter({date, time}) {
  return (
    <div className="calendar-footer">
      <div className="calendar-result">
          <img
              alt="" 
              className="cc-label theme-black-image" 
              src="/assets/svg/calendar.svg" 
          />
          <span>{date}</span>
          <img
              alt="" 
              className="cc-label theme-black-image" 
              src="/assets/svg/time.svg" 
          />
          <span>{time}</span>
        </div>
        <Link className="book-now-btn" to="/call/payment">Continue</Link>
    </div>
  );
}

export default CalendarFooter;