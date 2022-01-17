import React from 'react';
import './bookType.css';

function BookType({info, option, setOption}) {
  return (
    <div className={"book-type theme-black-soft-gray theme-dark-gray-background " + (option===info.id ? "book-type-focused" : "")}>
        <div className='type-title'> {info.title} </div>
        <div className='type-description'>
            {info.options.map(each => (
              <div className="description-wrapper" key={each}>
                <img alt="tick" src="/assets/svg/tick.svg"/>
                <div className="type-detail">{each}</div>
            </div>))}
        </div>
        <button className="book-btn theme-black-button" onClick={() => setOption(info.id)}>{info.button}</button>
    </div>
  );
} 

export default BookType;