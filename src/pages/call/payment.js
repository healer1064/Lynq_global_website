import './payment.css';
import CallPaymentForm from '../../components/call/paymentForm';

function Payment() {
  return (
    <div className="project-payment theme-dark-gray-background">
        <div className="pp-header theme-black-header-background">
            <img
                alt=""
                src="/assets/svg/avatar.svg"
                className="Round_Avatar"
            />
            <h4 className="pp-label theme-black">Ben Burns</h4>
            <div className="project-description">
                <span className="pp-label theme-black-letter">Select date $ time Payment</span>
                <img
                    alt="" 
                    className="pp-label theme-black-image" 
                    src="/assets/svg/back-arrow.svg" 
                />
                <span className="pp-label theme-black-white">Payment</span>
            </div>
        </div>
        <CallPaymentForm />
    </div>
  );
}

export default Payment;