import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

import './excPaymentSelect.css';
import '../common/payment.css';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
  };
  return (
    // <form onSubmit={handleSubmit}>
    <CardElement />
  );
};

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');


function ExcPaymentSelect() {
  return (
    <div className="exc-payment-select">
      <div className="exc-container">
        <p className="title">Select payment</p>
        <p className="choose-price">You chose: <span><b>$60.00</b> for 3 months</span></p>
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
            <input name="payment" type="radio"  />
            <span></span>
            <div className="paypal-div">
              <img src="/assets/svg/paypal.svg"/>
              <p>You'll be redirected to paypal.com</p>
            </div>
          </label>
        </div>
        <p className="teams-policy theme-black-information">
          By continuing, you agree with Lynq <b className="theme-black-soft-gray">Terms of Use, Privacy Policy</b> and <b className="theme-black-soft-gray">Cookie Policy</b>
        </p>
      </div>
    </div>
  );
}

export default ExcPaymentSelect;