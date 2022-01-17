import React from 'react';
import './payment.css';
import CallPaymentForm from '../../components/call/paymentForm';

function Payment() {
  return (
    <div className="project-payment theme-dark-gray-background">
        <div className="pp-header theme-black-header-background">
            <div className="cc-description mobile-cc-label">
                <span className="cc-label theme-black-letter">Select date &amp; time </span>
                <img
                    alt="" 
                    className="cc-label theme-black-image" 
                    src="/assets/svg/back-arrow.svg" 
                />
                <span className="cc-label theme-black-white">Payment</span>
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
                        <span className="cc-label theme-black-letter">Select date &amp; time </span>
                        <img
                            alt="" 
                            className="cc-label theme-black-image" 
                            src="/assets/svg/back-arrow.svg" 
                        />
                        <span className="cc-label theme-black-white">Payment</span>
                    </div>
                </div>
                <div className="mobile-version">
                    <p>PERSONAL VIDEO REQUEST</p>
                    <h4 className="cc-label theme-black">Ben Burns</h4>
                </div>
            </div>
        </div>
        <CallPaymentForm />
    </div>
  );
}

export default Payment;