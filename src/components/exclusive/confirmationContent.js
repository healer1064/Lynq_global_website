import './confirmationContent.css';

function ConfirmationContent() {
  return (
    <div className="confirmation-content">
        <img className="confirmation-image" src='/assets/svg/tick-circle.svg' />
        <p className="confirmation-title">Congratulations</p>
        <p className="confirmation-description">You're have subscribed to <span>Ben Burns exclusive content</span></p>
        <p className="confirmation-description">You can manage this subscription in your <a href="#">profile</a></p>
        <button className="confirmation-button">Visit Exclusive Content</button>
    </div>
  );
}

export default ConfirmationContent;