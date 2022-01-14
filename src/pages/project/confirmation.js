import './confirmation.css';
import ConfirmationHeader from '../../components/project/confirmationHeader.js';
import ConfirmationContent from '../../components/project/confirmationContent.js';

function Confirmation() {
  return (
    <div className="project-confirmation">
        <ConfirmationHeader />
        <ConfirmationContent />
    </div>
  );
}

export default Confirmation;