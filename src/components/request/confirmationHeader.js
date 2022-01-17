import React from 'react';
import './confirmationHeader.css';

function ConfirmationHeader() {
  return (
    <div className="request-confirmation-header">
        <img
            alt=""
            src="/assets/svg/avatar.svg"
            className="request-confirmation-avatar"
        />
    </div>
  );
}

export default ConfirmationHeader;