import React from 'react';
import { Link } from "react-router-dom";
import './calendarForm.css';
import months from './months';
import weekdays from './weekdays';

function CalendarForm({date, setDate}) {
  const original = new Date(date), d = new Date(date);
  let dates = [];
  [...Array(4)].map((x, i) => {
    dates.push({
      date: d.getDate(), 
      weekday: d.getDay(), 
      d: new Date(d.getTime()).toJSON().slice(0, 10)
    });
    d.setDate(d.getDate() + 1);
  });

  function handlePrevDate() {
    let d = new Date(date);
    d.setDate(d.getDate() - 1);
    setDate(d.toJSON().slice(0, 10));
  }

  function handleNextDate() {
    let d = new Date(date);
    d.setDate(d.getDate() + 1);
    setDate(d.toJSON().slice(0, 10));
  }

  return (
    <div className="calendar-form">
        <div className="calendar-month">
          <span className="month-description">{months[original.getMonth()]} {original.getFullYear()}</span>
          <span className="show-calendar">Pick a date</span>
        </div>
        <div className="calendar-date">
          <div className="date-button" onClick={handlePrevDate}>
            <img src="/assets/svg/arrow-left.svg" />
          </div>
          {dates.map(each => (
            <div 
              key={each.date}
              className={"date-each " + (original.getDate() === each.date ? "date-focused" : "")}
              onClick={() => setDate(each.d)}
            >
              <span>{weekdays[each.weekday]}</span>
              <span>{each.date}</span>
            </div>
          ))}
          <div className="date-button" onClick={handleNextDate}>
            <img src="/assets/svg/arrow-right.svg" />
          </div>
        </div>
    </div>
  );
}

export default CalendarForm;