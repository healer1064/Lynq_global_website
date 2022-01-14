import { useNavigate  } from "react-router-dom";
import {loadStripe} from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';

import './paymentForm.css';
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


function PaymentForm() {
    let navigate = useNavigate();
    
    function handleClick() {
        navigate("/call/confirmation");
    }

    return (
        <div className="pp-form-container theme-black-background">
            <div className="pp-form">
                <h6 className="pp-title padding-top-12 theme-black">Your info</h6>
                <div className="pp-form-content">
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
                <h6 className="pp-title padding-top-12 theme-black">Select Payment</h6>
                <div className="pp-form-content">
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
                </div>
                <div className="pp-agreement theme-black-information">
                    By pledging, you agree with Lynq
                    <a href='#' className="theme-black-link"> Terms of Use</a>, 
                    <a href='#' className="theme-black-link">Privacy Policy</a> and &nbsp;
                    <a href='#' className="theme-black-link">Cookie Policy</a>
                </div>
            </div>
            <div className="pp-footer-container theme-black-footer-background">
                <div className="pp-footer">
                    <button className="pp-continue theme-black-button" onClick={handleClick}>Pay $75</button>
                </div>
            </div>
        </div>
    );
}

export default PaymentForm;