import React from 'react';
import Header from '../../components/common/header.js';
import BackButton from '../../components/common/backButton.js';
import InfoBlock from '../../components/home/infoBlock.js';
import ExcContentGroup from '../../components/exclusive/excContentGroup.js';
import './exclusiveContent.css';

function ExclusiveContent() {
  return (
    <div className="exclusiveContent">
        <Header/>
        <div className="back-btn-wrapper">
          <div className="custom-container">
            <BackButton/>
          </div>
        </div>
        <InfoBlock/>
        <ExcContentGroup/>
    </div>
  );
}

export default ExclusiveContent;