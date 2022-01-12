import React, { useState } from 'react'
import MyProject from './menucontent/myproject';
import ExclusiveContent from './menucontent/exclusivecontent';
import VideoCall from './menucontent/videocall';
import Request from './menucontent/request';
import Product from './menucontent/product';

const Question = ({ id, title }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className='question'>
        <header className='question-header' onClick={() => setExpanded(!expanded)}>
            {id===1 ? (
                <img
                    alt=""
                    src="assets/svg/myproject.svg"
                    className="menu-img"
                />
            ): <div className="header-blank"/>}
            <h4 className='question-title'>
                {title}
            </h4>
            <button className='btn'>
                {
                    expanded ? 
                        <img
                            alt=""
                            src="assets/svg/minus.svg"
                        /> : 
                        <img
                            alt=""
                            src="assets/svg/plus.svg"
                        />
                }
            </button>
        </header>
        {expanded && <div className="question-content">
          {(id===1) && <MyProject />}
          {(id===2) && <ExclusiveContent />}
          {(id===3) && <VideoCall />}
          {(id===4) && <Request />}
          {(id===5) && <Product />}
        </div>}
    </article>
  )
}

export default Question