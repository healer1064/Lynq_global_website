import './confirmationContent.css';

function ConfirmationContent() {
  return (
    <div className="confirmation-content theme-dark-gray-background">
        <img className="confirmation-image" src='/assets/svg/tick-circle.svg' />
        <p className="confirmation-title">Congratulations</p>
        <p className="confirmation-description">
            You’re now a backer of the project<br/>
            Amount pledged: $10
        </p>
        <a href="#" className="theme-black-link-green">Contact Us</a>
    </div>
  );
}

export default ConfirmationContent;