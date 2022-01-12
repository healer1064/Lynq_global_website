import ConfirmationHeader from '../components/exclusive/confirmationHeader.js';
import ConfirmationContent from '../components/exclusive/confirmationContent.js';

import './confirmation.css';

function confirmation() {
  return (
    <div className="confirmation">
        <ConfirmationHeader />
        <ConfirmationContent />
    </div>
  );
}

export default confirmation;
