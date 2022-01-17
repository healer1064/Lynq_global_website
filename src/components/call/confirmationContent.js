import React from 'react';
import './confirmationContent.css';

function ConfirmationContent() {
  return (
    <div className="confirmation-content">
        <img className="confirmation-image" src='/assets/svg/tick-circle.svg' />
        <p className='confirmation-greeting'>Thank you Laurent!</p>
        <p className="confirmation-title">Your call has been booked!</p>
        <p className="confirmation-description">Your call date & time</p>
        <p className="confirmation-booking-date">1:30 PM - Friday, 11 June 2021 (Pacific Time)</p>
        <button className="confirmation-button">Add to Calendar</button>
    </div>
  );
}

export default ConfirmationContent;