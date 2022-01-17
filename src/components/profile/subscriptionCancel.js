import React from 'react';
import './subscriptionCancel.css';

function SubscriptionCancel({setCancel, setConfirm}) {
    function handleClose() {
        setCancel(false);
    }
    function handleConfirm() {
        setConfirm(true);
        setCancel(false);
    }
    return (
        <div className="subscription-cancel-dialog">
            <div className="subscription-cancel-background" />
            <div className="subscription-cancel-dialog-content">
                <p className="dialog-description">Are you sure you want to cancel your subscription?</p>
                <div className="dialog-buttons">
                    <button className="subscription-cancel-btn" onClick={handleConfirm}>Yes, I Confirm</button>
                    <button className="subscription-cancel-cancel" onClick={handleClose}>Cancel</button>
                </div>
                <img 
                    className="dialog-close" 
                    src="/assets/svg/close.svg"
                    onClick={handleClose}
                />
            </div>
        </div>
    );
}

export default SubscriptionCancel;