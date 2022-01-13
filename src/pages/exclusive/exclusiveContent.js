import Header from '../../components/common/header.js';
import BackButton from '../../components/common/backButton.js';
import InfoBlock from '../../components/home/infoBlock.js';
import ExcContentGroup from '../../components/exclusive/excContentGroup.js';
import './exclusiveContent.css';

function ExclusiveContent() {
  return (
    <div className="exclusiveContent">
        <Header/>
        <InfoBlock/>
        <ExcContentGroup/>
        {/* <BackButton/> */}
    </div>
  );
}

export default ExclusiveContent;