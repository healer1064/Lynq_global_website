import React, { useState, useEffect, useMemo  } from 'react'

import ProfileHeader from '../../components/profile/profileHeader';
import SubscriptionCancel from '../../components/profile/subscriptionCancel'
import SubscriptionConfirm from '../../components/profile/subscriptionConfirm'

import './profile.css';

import { loadStripe } from "@stripe/stripe-js";

import {
    Elements,
    CardElement,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js";

import Select from 'react-select'
import countryList from 'react-select-country-list'

const CountrySelector = () => {
    const data = countryList().getData();
    const [value, setValue] = useState('')
    const options = useMemo(() => data, [])
    const colourStyles = {
        control: base => ({
            ...base,
        }),
        menuList: styles => ({
            ...styles,
            background: '#393B3F',
            height: '150px',
            minHeight: '150px',
        }),
        option: (styles, {isFocused, isSelected}) => ({
            ...styles,
            color: '#999CA0',
            backgroundColor: isFocused
                ? '#393B3F'
                : isSelected
                    ? '#393B3F'
                    : undefined,
            zIndex: 1
        }),
        menu: base => ({
            ...base,
            zIndex: 100,
            color: '#999CA0',
            marginTop: '2px',
            background: '#393B3F'
        })
    }

    const changeHandler = value => {
      setValue(value)
    }
  
    return <Select     
                options={options} 
                value={value} 
                placeholder={data[236]['label']}
                onChange={changeHandler} 
                label="United State"
                styles={colourStyles}          
            />
}
  

const stripePromise = loadStripe("pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG");

const handleSubmit = (stripe, elements) => async () => {
    const cardElement = elements.getElement(CardElement);
  
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
    });
  
    if (error) {
        console.log('[error]', error);
    } else {
        console.log('[PaymentMethod]', paymentMethod);
        // ... SEND to your API server to process payment intent
    }
};
  
const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    return (
        <div className="payment-form">
            <div className="card-number-div">
                <label>Card number</label>
                <img src="/assets/svg/cards.svg"/>
            </div>
            <CardNumberElement/>
            <div className="other-pay-info">
                <div className="expiration-div">
                    <label>Expiration Date</label>
                    <CardExpiryElement/>
                </div>
                <div className="security-div">
                    <label>Security Code</label>
                    <CardCvcElement/>
                </div>
                <div className="zip-div">
                    <label>Zip Code</label>
                    <input/>
                </div>
            </div>
            <div className="country-div">
                <label>Country</label>
                <div className="country-select">
                    <CountrySelector/>
                </div>
            </div>
            <button onClick={handleSubmit(stripe, elements)}>Updated Card</button>
        </div>
    );
}
  
const StripePaymentForm  = () => (
    <Elements stripe={stripePromise}>
        <PaymentForm />
    </Elements>
);

function Profile() {
//   const [isfollow, setFollow] = useState(false);
    const [cancel, setCancel] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [changeCard, setChangeCard] = useState(true);
    
    return (
        <div className="profile">
            <ProfileHeader/>
            <div className="profile-details">
                <div className="profile-detail-container">
                    {/* <div className="details-img-div">
                        <img
                            src="/assets/svg/default-avatar.svg"
                            className="edit-profile-avatar theme-black-avatar-border"
                        />
                        <button className="theme-black-blue">Change Profile photo</button>
                    </div> */}
                    <div className="details-name-div">
                        <label htmlFor="first_name">First name</label>
                        <div className="input-field">
                            <input id="first_name" placeholder="Enter your first name"/>
                        </div>
                        <label htmlFor="last_name">Last name</label>
                        <div className="input-field">
                            <input id="last_name" placeholder="Enter your last name"/>
                        </div>
                        <label htmlFor="email">email</label>
                        <div className="input-field">
                            <input id="email" placeholder="Enter your email"/>
                        </div>
                        <button className="save-button">Save Changes</button>
                    </div>
                    <div className="subscriptions-div">
                        <label className="subscription-title"> Subscriptions </label>
                        <div className="subscription-block">
                            <div className="subscription-detail">
                                <label>Ben Burns</label>
                                <p>$60.00 every 3 months</p>
                            </div>
                            <button onClick={() => setCancel(true)}> Cancel Subscription </button>
                        </div>
                        <div className="subscription-block">
                            <div className="subscription-detail">
                                <label>Christian Anderson</label>
                                <p>$22.00 per month</p>
                            </div>
                            <button onClick={() => setCancel(true)}> Cancel Subscription </button>
                        </div>
                    </div>
                    <div className="billing-div">
                        <label className="billing-title">Billing</label>
                        <p className="payment-method">Payment method</p>
                        {
                            changeCard ?
                            (<div className="card-info">
                                <label className="card-owner">Laurent Bury</label>
                                <p className="hidden-card-number">**** **** **** 2281</p>
                                <button onClick={() =>setChangeCard(false)}>Change Card</button>
                            </div>) 
                            :
                            <StripePaymentForm/>
                        }

                        <div className="payment-schedule-div">
                            <label className="payment-schedule">payment schedule</label>
                            <label className="payment-date">Last payment: 11/11/2021</label>
                            <label className="payment-date">Next payment: 12/11/2021</label>
                        </div>
                    </div>
                </div>
            </div>
            {cancel && <SubscriptionCancel setCancel={setCancel} setConfirm={setConfirm}/>}
            {confirm && <SubscriptionConfirm setConfirm={setConfirm}/>}
        </div>
    );
}

export default Profile;