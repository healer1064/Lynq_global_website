import React from 'react';
import { useNavigate  } from "react-router-dom";
import {loadStripe} from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';

import './requestPayment.css';
import '../../components/common/payment.css';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (elements == null) {
//       return;
//     }

//     const {error, paymentMethod} = await stripe.createPaymentMethod({
//       type: 'card',
//       card: elements.getElement(CardElement),
//     });
//   };
  return (
    // <form onSubmit={handleSubmit}>
    <CardElement />
  );
};

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

function RequestPayment() {
    let navigate = useNavigate();
    let description = "Select date & time";
    
    function handleClick() {
        navigate("/request/confirmation");
    }

    return (
        <div className="request-payment">
            <div className="rp-header theme-black-header-background">
                <img
                    alt=""
                    src="/assets/svg/avatar.svg"
                    className="Round_Avatar"
                />
                <div className="desktop-version">
                    <h4 className="rp-label theme-black">Ben Burns</h4>
                    <p className="rp-header-description">
                        <span>{description}</span>
                        <span>&#8594;</span>
                        <span>Payment</span>
                    </p>
                </div>
                <div className="mobile-version">
                    <p>PERSONAL VIDEO REQUEST</p>
                    <h4 className="rp-label theme-black">Ben Burns</h4>
                </div>
                
            </div>
            <div className="rp-form-container theme-dark-gray-background">
                <div className="rp-form">
                    <h6 className="rp-title theme-black">Your Info</h6>
                    <div className="rp-form-content">
                        <label htmlFor="input_name">Name</label>
                        <div className="input-field">
                            <input id="input_name" name="input_name" placeholder="Enter your name"/>
                        </div>
                        <label htmlFor="input_lastname">Last name</label>
                        <div className="input-field">
                            <input id="input_lastname" name="input_lastname" placeholder="Enter your last name"/>
                        </div>
                        <label htmlFor="input_email">Email</label>
                        <div className="input-field">
                            <input type="email" id="input_email" name="input_email" placeholder="Enter your email"/>
                        </div>
                    </div>
                    <h6 className="rp-title padding-top-12 theme-black">Select Payment</h6>
                    <div className="rp-form-content">
                        <div>
                            <label className="stripe-label">
                                <input name="payment" type="radio" checked="checked"/>
                                <span></span>
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm />
                                </Elements>
                            </label>
                        </div>
                        <div>
                            <label className="paypal-label">
                                <input name="payment" type="radio" />
                                <span></span>
                                <div className="paypal-div">
                                    <img src="/assets/svg/paypal.svg"/>
                                    <p>You'll be redirected to paypal.com</p>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="rp-agreement theme-black-information">
                        By pledging, you agree with Lynq
                        <a href='#' className="theme-black-link"> Terms of Use</a>, 
                        <a href='#' className="theme-black-link">Privacy Policy</a> and &nbsp;
                        <a href='#' className="theme-black-link">Cookie Policy</a>
                    </div>
                </div>
                <div className="rp-footer-container theme-black-footer-background">
                    <div className="rp-footer">
                        <button className="rp-continue theme-black-button" onClick={handleClick}>Pay $20</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RequestPayment;