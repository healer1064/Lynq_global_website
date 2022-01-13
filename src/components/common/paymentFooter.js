import { Link } from "react-router-dom";
import './paymentFooter.css';

function PaymentFooter(props) {
  return (
    <div className="payment-footer">
        <Link className="footer-btn" to={props.link}>Pay ${props.price}</Link>
    </div>
  );
}

export default PaymentFooter;