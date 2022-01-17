import React from 'react';
import './confirmationHeader.css';

function ConfirmationHeader() {
  return (
    <div className="call-confirmation-header">
        <img
            alt=""
            src="/assets/svg/avatar.svg"
            className="call-confirmation-avatar"
        />
    </div>
  );
}

export default ConfirmationHeader;