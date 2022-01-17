import React from 'react';
import ConfirmationHeader from '../../components/call/confirmationHeader.js';
import ConfirmationContent from '../../components/call/confirmationContent.js';

import './callConfirmation.css';

function Confirmation() {
  return (
    <div className="call-confirmation">
        <ConfirmationHeader />
        <ConfirmationContent />
    </div>
  );
}

export default Confirmation;
