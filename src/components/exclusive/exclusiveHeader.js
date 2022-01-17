import React from 'react';
import './exclusiveHeader.css';

function ExclusiveHeader() {
  let description = "Select date & time";

  return (
    <div className="exclusive-header">
      <img
          alt=""
          src="/assets/svg/avatar.svg"
          className="exclusive-avatar"
      />
      <div className="desktop-version">
        <h4 className="eh-label theme-black">Ben Burns</h4>
        <p className="eh-header-description">
            <span>{description}</span>
            <span>&#8594;</span>
            <span>Payment</span>
        </p>
      </div>
      <div className="mobile-version">
        <p>exclusive content</p>
        <h4 className="eh-label theme-black">Ben Burns</h4>
      </div>
    </div>
  );
}

export default ExclusiveHeader;