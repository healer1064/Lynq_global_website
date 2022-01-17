import React from 'react';
import ExclusiveHeader from '../../components/exclusive/exclusiveHeader.js';
import ExcPaymentSelect from '../../components/exclusive/excPaymentSelect.js';
import PaymentFooter from '../../components/common/paymentFooter.js';
import './exclusivePayment.css';

function ExclusivePayment() {
  return (
    <div className="Exclusive">
        <ExclusiveHeader/>
        <ExcPaymentSelect/>
        <PaymentFooter link={"/exclusive/confirmation"} price={"60"}/>
    </div>
  );
}

export default ExclusivePayment;