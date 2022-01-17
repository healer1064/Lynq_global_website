import React, { useState } from 'react'
import './callCalendar.css';
import CalendarForm from '../../components/call/calendarForm';
import CalendarFooter from '../../components/call/calendarFooter';

function CallCalendar() {
    const [date, setDate] = useState(new Date().toJSON().slice(0, 10));
    const times = ['12:30 pm', '01:30 pm', '03:30 pm', '05:00 pm'];
    const [time, setTime] = useState(0); 

    return (
        <div className="call-calendar theme-dark-gray-background">
            <div className="cc-header theme-black-header-background">
                <div className="cc-description mobile-cc-label">
                    <span className="cc-label theme-black-white">Select date &amp; time </span>
                    <img
                        alt="" 
                        className="cc-label theme-black-image" 
                        src="/assets/svg/back-arrow.svg" 
                    />
                    <span className="cc-label theme-black-letter">Payment</span>
                </div>
                <div className="header-wrap-div">
                    <img
                        alt=""
                        src="/assets/svg/avatar.svg"
                        className="Round_Avatar"
                    />
                    <div className="desktop-version">
                        <h4 className="cc-label theme-black">Ben Burns</h4>
                        <div className="cc-description">
                            <span className="cc-label theme-black-white">Select date &amp; time </span>
                            <img
                                alt="" 
                                className="cc-label theme-black-image" 
                                src="/assets/svg/back-arrow.svg" 
                            />
                            <span className="cc-label theme-black-letter">Payment</span>
                        </div>
                    </div>
                    <div className="mobile-version">
                        <p>PERSONAL VIDEO REQUEST</p>
                        <h4 className="cc-label theme-black">Ben Burns</h4>
                    </div>
                </div>
            </div>
            <div className="cc-main">
                <div className="cc-title"><span>1:1 video call</span></div>
                <h6 className="cc-subtitle">Select date &amp; time</h6>
                <div className="cc-select">
                    <div className="cc-select-header">
                        <img
                            alt="" 
                            className="cc-label theme-black-image" 
                            src="/assets/svg/calendar.svg" 
                        />
                        <span>Select Date</span>
                    </div>
                    <div className="cc-select-content">
                        <CalendarForm date={date} setDate={setDate} />
                    </div>
                </div>
                <div className="cc-select">
                    <div className="cc-select-header">
                        <img
                            alt="" 
                            className="cc-label theme-black-image" 
                            src="/assets/svg/time.svg" 
                        />
                        <span>Select Time</span>
                    </div>
                    <div className="cc-select-content">
                        {times.map((each, index) => (
                            <span 
                                key={index} 
                                className={"cc-time " + (time===index ? "time-focused" : "")}
                                onClick={() => setTime(index)} 
                            >
                                {each}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <CalendarFooter time={times[time]} date={date}/>
        </div>
    );
}

export default CallCalendar;