import './confirmationContent.css';

function confirmationContent() {
  return (
    <div className="confirmation-content">
        <img className="confirmation-image" src='tick-circle.svg' />
        <p className="confirmation-title">Congratulations</p>
        <p className="confirmation-description">You're have subscribed to <b>Ben Burns exclusive content</b></p>
        <p className="confirmation-description">You can manage this subscription in your <a href="#">profile</a></p>
        <button className="confirmation-button">Visit Exclusive Content</button>
    </div>
  );
}

export default confirmationContent;