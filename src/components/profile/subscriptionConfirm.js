import React from 'react';
import './subscriptionConfirm.css';

function SubscriptionConfirm({setConfirm}) {
    function handleClose() {
        setConfirm(false);
    }
    return (
        <div className="subscription-confirm-dialog">
            <div className="subscription-confirm-background" />
            <div className="subscription-confirm-dialog-content">
                <p className="dialog-description">Confirmation</p>
                <p className="dialog-detail">Your subscription has been canceled</p>
                <img 
                    className="dialog-close" 
                    src="/assets/svg/close.svg"
                    onClick={handleClose}
                />
            </div>
        </div>
    );
}

export default SubscriptionConfirm;