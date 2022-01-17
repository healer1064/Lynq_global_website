import React from 'react';
import ConfirmationHeader from '../../components/exclusive/confirmationHeader.js';
import ConfirmationContent from '../../components/exclusive/confirmationContent.js';

import './exclusiveConfirmation.css';

function Confirmation() {
  return (
    <div className="exclusive-confirmation">
        <ConfirmationHeader />
        <ConfirmationContent />
    </div>
  );
}

export default Confirmation;
