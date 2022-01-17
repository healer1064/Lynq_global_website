import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Request = () => {
    return (
        <div className="request">
            {/* <div>
                <img src="/assets/img/request-avatar.png"></img>
            </div> */}
            <div className="left-pane">
                <p> Get your personal video messages. See details by clicking on the button belows </p>
                <Link to="/request/main"> Request Video Answer </Link>
            </div>
        </div>
    );
}

export default Request