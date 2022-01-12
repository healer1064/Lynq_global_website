import ExclusiveHeader from '../components/exclusive/exclusiveHeader.js';
import Membership from '../components/exclusive/membership.js';
import ExclusiveFooter from '../components/exclusive/exclusiveFooter.js';
import './exclusive.css';

function Exclusive() {
  return (
    <div className="Exclusive">
        <ExclusiveHeader/>
        <Membership/>
        <ExclusiveFooter/>
    </div>
  );
}

export default Exclusive;
