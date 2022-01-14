import Header from '../../components/common/header.js';
import InfoBlock from '../../components/home/infoBlock.js';
import BookType from '../../components/call/bookType.js'
import CallFooter from '../../components/call/callFooter.js'

import './callBook.css';

function CallBook() {
  return (
    <div className="call-book">
      <Header/>
      <InfoBlock/>
      <div className="flex-container theme-dark-black-background call-description-wrapper">
        <div className="call-description theme-black-soft-gray">
          <div className="one-to-one">1:1 VIDEO CALL</div>
          <div className="description-title">Why consult with Ben?</div>
          <div className="description-content">
            If you're looking for tactical, actionable advice about growing a creative business,
            finding more clients, and building scalable processes, Ben is a great fit.
          </div>
          <div className="description-title">Get the blueprint you need</div>
          <div className="description-content">
            I've been in your shoes... not too long ago. I was freelancing in my garage, doing $50 logos and $400 websites. 
            It's true. I used to be ashamed to admit it.
            <br/>
            In those days, all I wanted was for someone to show me the way. 
            Someone to give me their blueprint and help me grow a successful, sustainable studio.
          </div>
        </div>
        <div className="book-type-wrapper">
          <BookType/>
          <BookType/>
          <BookType/>
        </div>
      </div>
      <CallFooter/>
    </div>
  );
}

export default CallBook;