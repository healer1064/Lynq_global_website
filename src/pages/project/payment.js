import './payment.css';
import ProjectPaymentForm from '../../components/project/paymentForm';

function Payment() {
  return (
    <div className="project-payment">
        <div className="pp-header theme-black-header-background">
            <img
                alt=""
                src="/assets/svg/avatar.svg"
                className="Round_Avatar"
            />
            <h4 className="pp-label theme-black">Ben Burns</h4>
        </div>
        <ProjectPaymentForm />
    </div>
  );
}

export default Payment;