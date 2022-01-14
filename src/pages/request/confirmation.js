import './confirmation.css';
import ConfirmationHeader from '../../components/request/confirmationHeader.js';
import ConfirmationContent from '../../components/request/confirmationContent.js';

function Confirmation() {
  return (
    <div className="request-confirmation">
        <ConfirmationHeader />
        <ConfirmationContent />
    </div>
  );
}

export default Confirmation;