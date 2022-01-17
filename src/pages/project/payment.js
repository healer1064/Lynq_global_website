import React from 'react';
import './payment.css';
import ProjectPaymentForm from '../../components/project/paymentForm';

function Payment() {
  let description = "Select date & time";

  return (
    <div className="project-payment">
        <div className="pp-header theme-black-header-background">
            <img
                alt=""
                src="/assets/svg/avatar.svg"
                className="Round_Avatar"
            />
            <div className="desktop-version">
              <h4 className="pp-label theme-black">Ben Burns</h4>
              <p className="pp-header-description">
                <span>{description}</span>
                <span>&#8594;</span>
                <span>Payment</span>
              </p>
            </div>
            <div className="mobile-version">
              <p>PERSONAL VIDEO REQUEST</p>
              <h4 className="pp-label theme-black">Ben Burns</h4>
            </div>
        </div>

        

        <ProjectPaymentForm />
    </div>
  );
}

export default Payment;