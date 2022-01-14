import { useNavigate  } from "react-router-dom";
import './confirmationContent.css';

function ConfirmationContent() {
  let navigate = useNavigate();
  
  function handleClick() {
      navigate("/");
  }

  return (
    <div className="confirmation-content theme-dark-gray-background">
        <img className="confirmation-image" src='/assets/svg/tick-circle.svg' />
        <p className="confirmation-title">Your question has been received!</p>
        <p className="confirmation-description">
            You will receive a personal video answer within 2<br/>
            days
        </p>
        <button className="theme-black-button confirmation-button confirmation-buttons" onClick={handleClick}>Back Home</button>
        <a href="#" className="theme-black-link-green confirmation-buttons">Contact Us</a>
    </div>
  );
}

export default ConfirmationContent;