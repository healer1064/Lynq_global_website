import React from 'react';
import { Link } from 'react-router-dom';
import './confirmationContent.css';

function ConfirmationContent() {
  return (
    <div className="confirmation-content">
      <div className="content-container">
        <img className="confirmation-image" src='/assets/svg/tick-circle.svg' />
        <p className="confirmation-title">Congratulations</p>
        <p className="confirmation-description">You're have subscribed to <span>Ben Burns exclusive content</span></p>
        <p className="confirmation-description">You can manage this subscription in your <Link to="/profile">Profile</Link></p>
        <Link className="confirmation-button" to="/exclusive/content">Visit Exclusive Content</Link>
      </div>
    </div>
  );
}

export default ConfirmationContent;