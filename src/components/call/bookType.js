import './bookType.css';

function BookType() {
  return (
    <div className="book-type theme-black-soft-gray theme-dark-gray-background">
        <div className='type-title'> 15 minute session </div>
        <div className='type-description'>
            <div className="description-wrapper">
                <img src="/assets/svg/tick.svg"/>
                <div className="type-detail">Clarify your message</div>
            </div>
            <div className="description-wrapper">
                <img src="/assets/svg/tick.svg"/>
                <div className="type-detail">Three(3) recommendations</div>
            </div>
        </div>
        <div className="book-btn theme-black-button">Book for $49</div>
    </div>
  );
} 

export default BookType;