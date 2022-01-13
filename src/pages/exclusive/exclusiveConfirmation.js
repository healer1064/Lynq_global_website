import ConfirmationHeader from '../../components/exclusive/confirmationHeader.js';
import ConfirmationContent from '../../components/exclusive/confirmationContent.js';

import './exclusiveConfirmation.css';

function Confirmation() {
  return (
    <div className="confirmation">
        <ConfirmationHeader />
        <ConfirmationContent />
    </div>
  );
}

export default Confirmation;
